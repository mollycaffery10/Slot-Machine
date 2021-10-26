class SlotMachine
{
    constructor(el) {
        this.el = el;
        this.spawnButtons();
    }

    spawnButtons() {
        const someNode = document.createElement('button');
        someNode.innerText = 'Pull Lever';
        someNode.onclick = this.pullLever.bind(this);
        this.el.appendChild(someNode);
    }

    pullLever(myClassRef) {
        const self = this;
        Array.from(this.el.children).forEach(function(row) {
            Array.from(row.children).forEach(function(cell) {
                cell.innerHTML = self.getRndInteger(0, 2);
            });
        });
        console.log(this.getByCord(1,2).innerText);
    }

    getMiddleRows() {
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

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getByCord(columnNum, rowNum) {
        let foundCell = null;
        Array.from(this.el.children).forEach(function(row, rowIdx) {
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

    checkTwoWin(rowName1, rowName2, rowName3) {
        let cord1 = getByCord(rowName1);
        let cord2 = getByCord(rowName2);
        let cord3 = getByCord(rowName3);

        if (cord1 = 2) {
            if (cord2 = 2) {
                if (cord3 = 2) {
                    document.getElementById('scoreHeader').innerHTML = "Jackpot Win!";
                    return true;
                }
            }
        }
        document.getElementById('scoreHeader').innerHTML = "No Jackpot Win...";
        return false;
    }
}
