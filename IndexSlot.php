<?php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine</title>
</head>

<h1>Slot Machine</h1>
<br>

<div class="row">
    <span id="row1"></span>
    <span id="row2">2</span>
    <span id="row3">0</span>
</div>

<div class="row">
    <span id="row1"></span>
    <span id="row2">0</span>
    <span id="row3">1</span>
</div>

<div class="row">
    <span id="row1"></span>
    <span id="row2">1</span>
    <span id="row3">0</span>
</div>

<button onclick=changeNumbers(document.getElementsByClassName('row'))>Pull Lever</button>

<script>
    function changeNumbers(rows) {
        document.getElementById('row1').innerHTML = getRndInteger(0, 2);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>

</html>


