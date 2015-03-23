$(document).ready(function() {
    new CalculatorController({
        oNumberBtnData: getNumberBtnData(),
        oOperatorBtnData: getOperatorBtnData(),
        oDisplayData: getDisplayData(),
        sWrapper: 'calculator1'
    });
    new CalculatorController({
        oNumberBtnData: getNumberBtnData(),
        oOperatorBtnData: getOperatorBtnData(),
        oDisplayData: getDisplayData(),
        sWrapper: 'calculator2'
    });
});