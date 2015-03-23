/*
 * Operator Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
function OperatorBtnController(item, element) {
    this.model = new OperatorBtnModel(item);
    this.view = new OperatorBtnView(this.model, element);
    ButtonController.call(this, item, element);
}

OperatorBtnController.prototype = Object.create(ButtonController.prototype);


OperatorBtnController.prototype.constructor = ButtonController;