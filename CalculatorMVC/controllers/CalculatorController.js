/*
 *Calculate controller
 *Initialization controller to fetch the data, initialize Buton, display and PCB models, views and controllers
 */
function CalculatorController(item) {
    this.model = new CalculatorModel(item);
    this.view = new CalculatorView(this.model);
    var arrNumberBtnContoller = [],
        arrOperatorBtnContoller = [],
        arrDisplayContoller = [],
        _this = this;

    this.view.drawCalc();

    //Create model, view and controller for every button
    $.each(this.model.oNumberBtnData, function(index, value) {
        arrNumberBtnContoller[index] = new NumberBtnController(value, $('.' + _this.model.sWrapper + ' .buttons'));
        arrNumberBtnContoller[index].drawButton();
    });

    $.each(this.model.oOperatorBtnData, function(index, value) {
        arrOperatorBtnContoller[index] = new OperatorBtnController(value, $('.' + _this.model.sWrapper + ' .buttons'));
        arrOperatorBtnContoller[index].drawButton();
    });

    //Create model, view and controller for every Display
    $.each(this.model.oDisplayData, function(index, value) {
        arrDisplayContoller[index] = new DisplayController(value, $('.' + _this.model.sWrapper + ' .display-box'));
        arrDisplayContoller[index].resetDisplay();
    });

    //Create PCB controller
    new PCBController(arrNumberBtnContoller, arrOperatorBtnContoller, arrDisplayContoller);
}