import React, { Component } from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

import Display from "./Display";
import Keyboard from "./Keyboard";

import clearSound from "../assets/tadadum.mp3";
import buttonSound from "../assets/pik.mp3";
import evalSound from "../assets/bum.mp3";

const clearAudio = new Audio(clearSound);
const buttonAudio = new Audio(buttonSound);
const evalAudio = new Audio(evalSound);

const startClearSound = () => {
    clearAudio.play();
};

const startButtonSound = () => {
    buttonAudio.play();
};

const startEvalSound = () => {
    evalAudio.play();
};

const CalculatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-image: linear-gradient(to right bottom, #9c5cd7, #f69175);
`;

const Calculator = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    max-width: 368px;
    max-height: 600px;
    border-radius: 5px;
    background-color: #ffffff;
    overflow: hidden;
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expression: "",
            currentInput: "",
            operator: "",
            result: "",
        };
    }

    isTotalInputTooLong = () => {
        const expressionLength = this.state.expression.toString().length;
        const currentInputLength = this.state.currentInput.toString().length;

        if (expressionLength + currentInputLength >= 49) {
            return true;
        }

        return false;
    };

    addNumberToExpression = (number) => {
        if (this.isTotalInputTooLong()) {
            return;
        }

        // prevent adding 0 before number without dot
        if (this.state.currentInput === "0") {
            return;
        }

        // prevent too long current input
        if (this.state.currentInput.length > 9) {
            return;
        }

        if (this.state.operator) {
            this.setState({
                expression: this.state.expression + this.state.operator,
                currentInput: this.state.currentInput + number,
                operator: "",
                result: "",
            });
        } else {
            this.setState({
                expression: this.state.expression,
                currentInput: this.state.currentInput + number,
                operator: "",
                result: "",
            });
        }
    };

    addDecimalToExpression = () => {
        if (this.isTotalInputTooLong()) {
            return;
        }

        // prevent adding dot without number
        if (this.state.currentInput === "") {
            return;
        }

        // add decimal only if no decimal in current expression
        if (this.state.currentInput.indexOf(".") === -1) {
            this.setState({
                ...this.state,
                currentInput: this.state.currentInput + ".",
            });
        }
    };

    addOperatorToExpression = (operator) => {
        if (this.isTotalInputTooLong()) {
            return;
        }

        // prevent adding operator without any number
        if (
            this.state.expression === "" &&
            this.state.currentInput === "" &&
            this.state.result === ""
        ) {
            return;
        }

        startButtonSound();

        if (this.state.operator) {
            this.setState({
                expression: this.state.expression,
                currentInput: "",
                operator: operator,
                result: this.state.result,
            });
        } else {
            this.setState({
                expression:
                    this.state.result ||
                    this.state.expression + this.state.currentInput,
                currentInput: "",
                operator: operator,
                result: "",
            });
        }
    };

    changeCurrentInputSign = () => {
        // prevent changing sign without number
        if (this.state.currentInput === "") {
            return;
        }

        let changed = this.state.currentInput;

        if (this.state.currentInput.toString().indexOf("-") === 0) {
            changed = changed.substring(1);
        } else {
            changed = "-".concat(this.state.currentInput);
        }

        this.setState({
            ...this.state,
            currentInput: changed,
        });
    };

    convertPercentageToNumber = () => {
        this.setState({
            ...this.state,
            currentInput: this.state.currentInput / 100,
        });
    };

    clearExpression = () => {
        startClearSound();

        this.setState({
            expression: "",
            currentInput: "",
            operator: "",
            result: "",
        });
    };

    evalueteExpression = () => {
        // prevent eval if operator is last  element in expression - mathjs rule
        if (this.state.currentInput === "") {
            return;
        }

        startEvalSound();

        this.setState({
            expression: "",
            operator: "",
            currentInput: "",
            result: parseFloat(
                evaluate(
                    this.state.expression +
                        this.state.operator +
                        this.state.currentInput
                ).toFixed(6)
            ),
        });
    };

    render() {
        return (
            <CalculatorWrapper>
                <Calculator>
                    <Display values={this.state}></Display>
                    <Keyboard
                        convertPercentageToNumber={
                            this.convertPercentageToNumber
                        }
                        changeCurrentInputSign={this.changeCurrentInputSign}
                        clearExpression={this.clearExpression}
                        addOperatorToExpression={this.addOperatorToExpression}
                        addNumberToExpression={this.addNumberToExpression}
                        addDecimalToExpression={this.addDecimalToExpression}
                        evalueteExpression={this.evalueteExpression}
                    />
                </Calculator>
            </CalculatorWrapper>
        );
    }
}

export default App;
