class SlotMachine
{
    constructor(element) {
        this.element = element;
        this.spawnButtons();
    }

    spawnButtons() {
        const someNode = document.createElement('button');
        someNode.innerText = 'Pull Lever';
        someNode.onclick = this.pullLever.bind(this);
        this.element.appendChild(someNode);
    }

    pullLever() {
        const self = this;
        Array.from(this.element.children).forEach(function(row, rowInx, array) {
            Array.from(row.children).forEach(function(cell) {
                cell.innerHTML = self.getRndInteger(0, 2);
            });
            // Catch on last iteration to catch actual row index
            if(rowInx === array.length - 1){
                self.getMiddleRows(rowInx);
            }
        });
    }

    getMiddleRows(amountRows) {
        let middleRows = amountRows/2;
        middleRows = Math.round(middleRows);
        console.log("The middle row is equal to: " + middleRows);
        this.getMiddleCells(middleRows);//html node reference?
    }

    getMiddleCells(middleRowInx) {
        const self = this;
        let middleCellArr = [];
        Array.from(this.element.children).forEach(function(row, rowIdx) {
            if (middleRowInx === rowIdx) {
                Array.from(row.children).forEach(function (cell, cellIdx) {
                    let middleCord = self.getByCord(cellIdx,(middleRowInx - 1)).innerText;
                    console.log("The middle cell coordinate: " +  middleCord + " at the index: " + cellIdx);
                    middleCellArr += middleCord;
                });
                self.isCellsEqual(middleCellArr);
            }
        });

    }

    isCellsEqual(middleCellsArray) {
        console.log("Here is array: " + middleCellsArray);
        //TODO how to make this scalable for < 3 slot size.
        // Below is just testing-- needing to find a way to a find win better.
        // middleCellsArray.forEach(cellElement => {
        //     console.log(cellElement);
        // });

        for (let index = 0; index < middleCellsArray.length; ++index) {
            const element = middleCellsArray[index];
            console.log("Element = " + element);

            if(index > 3){
                if(element[index] == element[index + 1] && element[index] == element[index + 2]){
                    // Add win message here
                    console.log("You got all three");
                }
            }
        }

        if(middleCellsArray[0] != middleCellsArray[1] && middleCellsArray[0] != middleCellsArray[2]){
            console.log("You lost!");
        }
    }

    isWin(){

    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getByCord(columnNum, rowNum) {
        let foundCell = null;
        Array.from(this.element.children).forEach(function(row, rowIdx) {
            if (rowIdx === rowNum) {
                Array.from(row.children).forEach(function (cell, cellIdx) {
                    if (cellIdx === columnNum) {
                        foundCell = cell;
                    }
                }, this)
            }
        }, this);
        return foundCell;
    }
}
