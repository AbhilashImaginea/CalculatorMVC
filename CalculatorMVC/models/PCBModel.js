/*
 * PCB Model
 * Stores items related to calculator
 */
function PCBModel(item) {
    this.iFirstValue = item.iFirstValue;
    this.isFirstValueFinal = item.isFirstValueFinal;
    this.iSecondValue = item.iSecondValue;
    this.isPreviousTotal = item.isPreviousTotal;
    this.oCurrentOperator = item.oCurrentOperator;
    this.isValueCalculated = item.isValueCalculated;
    this.iCurrentNumber = item.iCurrentNumber;
    this.sCurrentInput = item.sCurrentInput;
}