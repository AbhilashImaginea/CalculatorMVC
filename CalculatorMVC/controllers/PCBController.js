/*
 * PCB Controller
 * PCB Controller responds to user actions from button controller and passes changes based on computations to Display controller.
 */
function PCBController(arrButtonContoller, arrDisplayController) {
    var _this = this;
    this.arrButtonCtrl = arrButtonContoller;
    this.arrDisplayCtrl = arrDisplayController;
    this.model = new PCBModel({
        iFirstValue: 0,
        isFirstValueFinal: false,
        iSecondValue: 0,
        isPreviousTotal: false,
        oCurrentOperator: '',
        isValueCalculated: false,
        iCurrentNumber: '',
        sCurrentInput: ''
    });

    //Assign function to click event of the button
    $.each(this.arrButtonCtrl, function(index, value) {
        value.view.buttonClicked = function(model) {
            _this.onButtonClick(model);
        }
    });
}

//Calls the appropriate function based on the input
PCBController.prototype.onButtonClick = function(model) {
    if (model.type === "number") {
        this.onNumberClick(model);
    } else {
        this.onOperatorClick(model);
    }
    this.callDisplay();
}

//This function handles the number input
PCBController.prototype.onNumberClick = function(model) {
    var oClickedValue = model.value;
    if (this.model.isValueCalculated === true) {
        if (this.model.oCurrentOperator !== '') {
            this.model.iFirstValue = this.model.iCurrentNumber;
            this.model.isFirstValueFinal = true;
            this.model.isValueCalculated = false;
            this.model.iCurrentNumber = oClickedValue;
            this.model.iSecondValue = oClickedValue;
        } else {
            this.clear();
            this.model.iCurrentNumber = oClickedValue;
            this.model.isValueCalculated = false;
        }
    } else if (this.model.oCurrentOperator !== '' && !this.model.isFirstValueFinal) {
        this.model.iFirstValue = this.model.iCurrentNumber;
        this.model.isFirstValueFinal = true;
        this.model.iSecondValue = oClickedValue;
        this.model.iCurrentNumber = oClickedValue;
    } else if (this.model.oCurrentOperator !== '' && this.model.isFirstValueFinal) {
        this.model.iSecondValue = this.model.iCurrentNumber + oClickedValue;
        this.model.iCurrentNumber = this.model.iSecondValue;
    } else {
        this.model.iCurrentNumber += oClickedValue;
    }

}

//This function handles the operator input
PCBController.prototype.onOperatorClick = function(model) {
    var oClickedValue = model.value;
    switch (oClickedValue) {
        case "/":
        case "+":
        case "*":
        case "-":
            if (this.model.iCurrentNumber === '') {
                this.model.oCurrentOperator = '';
            } else if (this.model.oCurrentOperator !== '' && this.model.iSecondValue !== 0) {
                this.onEqualtoClick();
                this.model.oCurrentOperator = oClickedValue;
            } else {
                this.model.oCurrentOperator = oClickedValue;
            }
            break;
        case "=":
            this.onEqualtoClick();
            break;
        case "C":
            this.clear();
            break;
    }
}

//Calculate the input on click of equal to button
PCBController.prototype.onEqualtoClick = function() {
    if (!isNaN(parseInt(this.model.iFirstValue, 0)) && parseInt(this.model.iSecondValue, 0) !== 0) {
        switch (this.model.oCurrentOperator) {
            case "/":
                this.model.iFinalValue = parseInt(this.model.iFirstValue, 0) / parseInt(this.model.iSecondValue, 0);
                break;
            case "+":
                this.model.iFinalValue = parseInt(this.model.iFirstValue, 0) + parseInt(this.model.iSecondValue, 0);
                break;
            case "*":
                this.model.iFinalValue = parseInt(this.model.iFirstValue, 0) * parseInt(this.model.iSecondValue, 0);
                break;
            case "-":
                this.model.iFinalValue = parseInt(this.model.iFirstValue, 0) - parseInt(this.model.iSecondValue, 0);
                break;
        }

        this.model.iCurrentNumber = parseInt(this.model.iFinalValue, 0);
        this.model.isValueCalculated = true;
        this.model.oCurrentOperator = '';
        this.model.iSecondValue = 0;
    }
}


//Format the current input values and call the drawDisplay function of DisplayViw
PCBController.prototype.callDisplay = function() {
    var sCurrentInput, oValues;
    if (this.model.iFirstValue !== 0) {
        if (this.model.isValueCalculated === true) {
            sCurrentInput = this.model.iCurrentNumber;
        } else {
            sCurrentInput = this.model.iFirstValue;
        }
    } else {
        sCurrentInput = this.model.iCurrentNumber;
    }
    if (this.model.oCurrentOperator !== '' && this.model.isValueCalculated === false) {
        sCurrentInput += this.model.oCurrentOperator;
        if (this.model.iSecondValue !== 0) {
            sCurrentInput += this.model.iSecondValue;
        }
    } else if (this.model.oCurrentOperator !== '') {
        sCurrentInput += this.model.oCurrentOperator;
    }

    oValues = {
        value: this.model.iCurrentNumber,
        input: sCurrentInput
    }
    $.each(this.arrDisplayCtrl, function(index, value) {
        value.drawDisplay(oValues);
    });
}

//Reset the model to default values on click of clear button
PCBController.prototype.clear = function() {
    this.model = new PCBModel({
        iFirstValue: 0,
        isFirstValueFinal: false,
        iSecondValue: 0,
        isPreviousTotal: false,
        oCurrentOperator: '',
        isValueCalculated: false,
        iCurrentNumber: '',
        sCurrentInput: ''
    });
}