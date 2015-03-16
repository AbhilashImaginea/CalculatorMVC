/*
 * Display View
 * Presents the display model. Based on user input, draws or resets the view
 */
function DisplayView(model, element) {
    this.model = model;
    this.element = element;
}

//Create the div on DOM to display the input and result
DisplayView.prototype.drawDisplay = function() {
    var oDisplay = this.element,
        modelObject = this.model,
        oDisplayElement = document.createElement('div'),
        oInputElement = document.createElement('div');

    $(oInputElement).addClass('input');
    $(oDisplayElement).addClass('display');
    $(oInputElement).html(modelObject.value);
    $(oDisplayElement).html(modelObject.input);
    oDisplay.html('');
    oDisplay.append(oDisplayElement);
    oDisplay.append(oInputElement);
}