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
        console.log(this.getByCord(1,2).innerText);
    }

    getMiddleRows(amountRows) {
        let middleRows = amountRows/2;
        middleRows = Math.round(middleRows);
        console.log("Middle Row = " + middleRows);
        return '';//html node reference?
    }

    getRowCells() {

    }

    isCellsEqual(cells) {
        let equal = false;
        cells.forEach(function(cell) {
            
        });
        return equal;
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
