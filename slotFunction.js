function changeNumbers(rows) {
    document.getElementById('row1').innerHTML = getRndInteger(0, 2);
    document.getElementById('row2').innerHTML = getRndInteger(0, 2);
    document.getElementById('row3').innerHTML = getRndInteger(0, 2);

    document.getElementById('rowMid1').innerHTML = getRndInteger(0, 2);
    document.getElementById('rowMid2').innerHTML = getRndInteger(0, 2);
    document.getElementById('rowMid3').innerHTML = getRndInteger(0, 2);

    document.getElementById('rowLow1').innerHTML = getRndInteger(0, 2);
    document.getElementById('rowLow2').innerHTML = getRndInteger(0, 2);
    document.getElementById('rowLow3').innerHTML = getRndInteger(0, 2);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getByCord(rowName){
    let cordValue = document.getElementById(rowName).innerHTML;
}

function checkTwoWin(rowName1, rowName2, rowName3){
    let cord1 = getByCord(rowName1);
    let cord2 = getByCord(rowName2);
    let cord3 = getByCord(rowName3);

    if(cord1 = 2){
        if(cord2 = 2){
            if(cord3 = 2){
                document.getElementById('scoreHeader').innerHTML = "Jackpot Win!";
                return true;
            }
        }
    }
}