<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine</title>
    <link rel="stylesheet" href="style.css">
</head>

<h1>Slot Machine</h1>
<br>

<div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</div>


<h2>Player One:</h2>
<div class="slotStyles" id="slot1">
    <div class="row">
        <span class="row1">0</span>
        <span class="row2">2</span>
        <span class="row3">0</span>
    </div>

    <div class="row">
        <span class="rowMid1">2</span>
        <span class="rowMid2">0</span>
        <span class="rowMid3">1</span>
    </div>

    <div class="row">
        <span class="rowLow1">1</span>
        <span class="rowLow2">1</span>
        <span class="rowLow3">0</span>
    </div>
    <h2 class = "winOrLose">In Progress</h2>
</div>

<h2>Player Two:</h2>
<div class="slotStyles" id="slot2">
    <div class="row">
        <span class="row1">0</span>
        <span class="row2">2</span>
        <span class="row3">0</span>
    </div>

    <div class="row">
        <span class="rowMid1">2</span>
        <span class="rowMid2">0</span>
        <span class="rowMid3">1</span>
    </div>

    <div class="row">
        <span class="rowLow1">1</span>
        <span class="rowLow2">1</span>
        <span class="rowLow3">0</span>
    </div>
    <h2 class = "winOrLose">In Progress</h2>
</div>

<script src="slotFunction.js"></script>

<script type="text/javascript">
    const slot1 = new SlotMachine(document.getElementById('slot1'));
    const slot2 = new SlotMachine(document.getElementById('slot2'));
</script>

</html>


