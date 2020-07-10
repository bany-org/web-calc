import React, { Component } from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

import Display from "./Display";
import Button from "./Button";

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

const KeyboardRow = styled.div`
    display: flex;
    height: 100%;
    margin: 0;
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

    addNumber = (number) => {
        // prevent too long input
        if (
            this.state.expression.toString().length +
                this.state.currentInput.toString().length >=
            49
        ) {
            return;
        }

        // prevent adding 0 before number without dot
        if (this.state.currentInput === "0") {
            return;
        }

        // prevent too long input
        if (this.state.currentInput.length > 9) {
            return;
        }

        let result = this.state.result;

        if (this.state.result !== "") {
            result = "";
        }

        if (this.state.operator) {
            this.setState({
                expression: this.state.expression + this.state.operator,
                currentInput: this.state.currentInput + number,
                operator: "",
                result: result,
            });
        } else {
            this.setState({
                expression: this.state.expression,
                currentInput: this.state.currentInput + number,
                operator: "",
                result: result,
            });
        }
    };

    addDecimal = (dot) => {
        if (this.state.currentInput === "") {
            return;
        }

        if (
            this.state.expression.toString().length +
                this.state.currentInput.toString().length >=
            49
        ) {
            return;
        }

        if (this.state.currentInput.indexOf(".") === -1) {
            this.setState({
                expression: this.state.expression,
                currentInput: this.state.currentInput + ".",
                operator: this.state.operator,
                result: this.state.result,
            });
        }
    };

    addOperator = (operator) => {
        // prevent too long input
        if (
            this.state.expression.toString().length +
                this.state.currentInput.toString().length >=
            49
        ) {
            return;
        }

        // prevent
        // if (this.state.operator === operator) {
        //     return;
        // }

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

            return;
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

    changeSign = () => {
        if (this.state.currentInput === "") {
            return;
        }
        let changed = this.state.currentInput;

        if (this.state.currentInput.indexOf("-") === 0) {
            console.log("changed", changed);
            changed = changed.substring(1);
        }

        if (this.state.currentInput.indexOf("-") === -1) {
            changed = "-".concat(this.state.currentInput);
        }

        this.setState({
            expression: this.state.expression,
            currentInput: changed,
            operator: this.state.operator,
            result: this.state.result,
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

    calcPercentage = () => {
        console.log("%:", this.state);

        this.setState({
            ...this.state,
            currentInput: this.state.currentInput / 100,
        });
    };

    evalueteExpression = () => {
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
                    <KeyboardRow>
                        <Button
                            color="dark"
                            onButtonClick={this.calcPercentage}
                        >
                            %
                        </Button>
                        <Button color="dark" onButtonClick={this.changeSign}>
                            +/-
                        </Button>
                        <Button
                            color="dark"
                            onButtonClick={this.clearExpression}
                        >
                            C
                        </Button>
                        <Button color="violet" onButtonClick={this.addOperator}>
                            {" / "}
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.addNumber}>7</Button>
                        <Button onButtonClick={this.addNumber}>8</Button>
                        <Button onButtonClick={this.addNumber}>9</Button>
                        <Button
                            onButtonClick={() => this.addOperator(" * ")}
                            color="violet"
                        >
                            x
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.addNumber}>4</Button>
                        <Button onButtonClick={this.addNumber}>5</Button>
                        <Button onButtonClick={this.addNumber}>6</Button>
                        <Button onButtonClick={this.addOperator} color="violet">
                            {" - "}
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.addNumber}>1</Button>
                        <Button onButtonClick={this.addNumber}>2</Button>
                        <Button onButtonClick={this.addNumber}>3</Button>
                        <Button color="violet" onButtonClick={this.addOperator}>
                            {" + "}
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.addNumber}>0</Button>
                        <Button onButtonClick={this.addDecimal}>,</Button>
                        <Button
                            color="pink"
                            onButtonClick={this.evalueteExpression}
                        >
                            =
                        </Button>
                    </KeyboardRow>
                </Calculator>
            </CalculatorWrapper>
        );
    }
}

export default App;
