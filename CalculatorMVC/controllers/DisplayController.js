/*
 * The Display Controller
 * Responds to changes from PCB controller and invokes changes on the Display model.
 */
function DisplayController(value, element) {
    this.model = new DisplayModel(value);
    this.view = new DisplayView(this.model, element);
}

//Call the drawDisplay of view with the parameters
DisplayController.prototype.drawDisplay = function(item) {
    this.model.value = item.value;
    this.model.input = item.input;
    this.view.drawDisplay();
}

//Reset the display
DisplayController.prototype.resetDisplay = function() {
    this.view.drawDisplay();
}