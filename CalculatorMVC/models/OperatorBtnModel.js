/*
 * Button Model
 * Stores items related to operator buttons
 */
function OperatorBtnModel(item) {
    ButtonModel.call(this, item);
    this.type = 'bOperator';
}

OperatorBtnModel.prototype = Object.create(ButtonModel.prototype); 

OperatorBtnModel.prototype.constructor = ButtonModel;