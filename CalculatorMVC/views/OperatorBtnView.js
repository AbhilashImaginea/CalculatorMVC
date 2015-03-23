/*
 * Operator Button View
 * Presents the model and provides the UI events such as click from user
 * Button controller is attached to these events to handle the user interaction
 */
function OperatorBtnView(model, element) {
    this.model = model;
    this.element = element;
    ButtonView.call(this);
}

OperatorBtnView.prototype = Object.create(ButtonView.prototype);

OperatorBtnView.prototype.constructor = ButtonView;