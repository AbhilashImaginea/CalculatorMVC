/*
 * Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
function ButtonController(value, element) {
    var _this = this;
    this.buttonClickedCtrl = new Event(this);
    this.view.buttonClickedView.attach(function() {
        _this.buttonClickedCtrl.notify(_this.model);
    });
}

//Call the drawbutton function of view
ButtonController.prototype.drawButton = function() {
    this.view.drawButton();
}