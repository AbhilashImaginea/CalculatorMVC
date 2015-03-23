/*
 * Display View
 * Presents the display model. Based on user input, draws or resets the view
 */
function CalculatorView(model) {
    this.model = model;
}

//Create the div on DOM to display the input and result
CalculatorView.prototype.drawCalc = function() {
    var oBody = $('body'),
        modelObject = this.model,
        oCalcElement = document.createElement('section'),
        oDisplayElement = document.createElement('div'),
        oButtonsElement = document.createElement('div');

    $(oCalcElement).addClass('calculator');
    $(oCalcElement).addClass(modelObject.sWrapper);
    $(oDisplayElement).addClass('display-box');
    $(oButtonsElement).addClass('buttons');

    $(oCalcElement).append(oDisplayElement);
    $(oCalcElement).append(oButtonsElement);
    
    oBody.append(oCalcElement);
}