//Initialization function to fetch the data, initialize models, views and controllers
$(document).ready(function() {
    var oButtonData = getButtonData(),
        oDisplayData = getDisplayData(),
        arrButtonContoller = [],
        arrDisplayContoller = [],
        controller;

    //Create model, view and controller for every button
    $.each(oButtonData, function(index, value) {
        arrButtonContoller[index] = new ButtonController(value, $('.buttons'));
        arrButtonContoller[index].drawButton();
    });

    //Create model, view and controller for every Display
    $.each(oDisplayData, function(index, value) {
        arrDisplayContoller[index] = new DisplayController(value, $('.display-box'));
        arrDisplayContoller[index].resetDisplay();
    });

    //Create PCB controller
    controller = new PCBController(arrButtonContoller, arrDisplayContoller);
});