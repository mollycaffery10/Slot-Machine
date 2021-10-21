<?php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Slot Machine</title>
</head>

<body>
    <h1>Slot Machine</h1>
    <div class="row" align="center">
        <span>0</span>
        <span>1</span>
        <span>2</span>
    </div>

    <div class="row" align="center">
        <span id="row1">1</span>
        <span>2</span>
        <span>0</span>
    </div>

    <div class="row" align="center">
        <span>1</span>
        <span>0</span>
        <span>2</span>
    </div>

    <div class="lever" align="center">
        <button onclick="changeNumber()">Pull Lever</button>
    </div>
</body>

<script src="slotFunction.js">
    let slots = slotFunctionality();
    let row = slots.document.getElementsByClassName("row1");

    function changeNumber() {
        document.getElementById("row1").innerHTML = '2';
    }
</script>

</html>
