/*
 * Number Button View
 * Presents the model and provides the UI events such as click from user
 * Button controller is attached to these events to handle the user interaction
 */
function NumberBtnView(model, element) {
    this.model = model;
    this.element = element;
    ButtonView.call(this);
}

NumberBtnView.prototype = Object.create(ButtonView.prototype); 

NumberBtnView.prototype.constructor = ButtonView;