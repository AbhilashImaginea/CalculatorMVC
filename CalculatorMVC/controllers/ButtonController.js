/*
 * Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
function ButtonController(value, element) {
    this.model = new ButtonModel(value);
    this.view = new ButtonView(this.model, element);
}

//Call the drawbutton function of view
ButtonController.prototype.drawButton = function() {
    this.view.drawButton();
}