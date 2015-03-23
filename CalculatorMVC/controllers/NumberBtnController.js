/*
 * Number Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
function NumberBtnController(item, element) {
    this.model = new NumberBtnModel(item);
    this.view = new NumberBtnView(this.model, element);
    ButtonController.call(this, item, element);
}

NumberBtnController.prototype = Object.create(ButtonController.prototype);


NumberBtnController.prototype.constructor = ButtonController;

