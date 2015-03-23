/*
 * Button View
 * Presents the model and provides the UI events such as click from user
 * Button controller is attached to these events to handle the user interaction
 */
function ButtonView(model, element) {
    this.buttonClickedView = new Event(this);
}

//Create the button element on the DOM
ButtonView.prototype.drawButton = function() {
    var oButtonElement,
        oButton = this.element,
        _this = this,
        modelObject = this.model;
    oButtonElement = document.createElement('button');
    $(oButtonElement).addClass(modelObject.type);
    $(oButtonElement).html(modelObject.value);
    $(oButtonElement).click(function() {
       _this.buttonClickedView.notify();
    });
    oButton.append(oButtonElement);
}