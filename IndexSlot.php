<?php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine</title>
    <link rel="stylesheet" href="style.css">
</head>

    <h1>Slot Machine</h1>
<br>

<div class="row">
    <span id="row1">0</span>
    <span id="row2">2</span>
    <span id="row3">0</span>
</div>

<div class="row">
    <span id="rowMid1">2</span>
    <span id="rowMid2">0</span>
    <span id="rowMid3">1</span>
</div>

<div class="row">
    <span id="rowLow1">1</span>
    <span id="rowLow2">1</span>
    <span id="rowLow3">0</span>
</div>

<button id ="lever" onclick=changeNumbers(document.getElementsByClassName('row'))>Pull Lever</button>

<script src="slotFunction.js"></script>

</html>


