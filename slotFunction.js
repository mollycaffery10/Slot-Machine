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