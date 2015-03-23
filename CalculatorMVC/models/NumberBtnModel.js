/*
 * Button Model
 * Stores items related to number buttons
 */
function NumberBtnModel(item) {
    ButtonModel.call(this, item);
    this.type = 'number';
}

NumberBtnModel.prototype = Object.create(ButtonModel.prototype);

NumberBtnModel.prototype.constructor = ButtonModel;