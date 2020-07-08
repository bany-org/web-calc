import React, { Component } from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

import Display from "./Display";
import Button from "./Button";

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
    width: 368px;
    height: 600px;
    border-radius: 5px;
    background-color: #ffffff;
    overflow: hidden;
`;

const KeyboardRow = styled.div`
    display: flex;
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expression: "",
            result: "",
            currentInput: "",
            operator: "",
        };
    }

    addNumber = (number) => {
        console.log("addNumber");

        this.setState({
            ...this.state,
            expression: this.state.expression + number,
            currentInput: this.state.currentInput + number,
            operator: "",
        });
    };

    addDecimal = (dot) => {
        console.log("add decimal", this.state);

        if (this.state.currentInput.indexOf(".") === -1) {
            this.setState({
                ...this.state,
                expression: this.state.expression + ".",
                currentInput: this.state.currentInput + ".",
            });
        }
    };

    addOperator = (operator) => {
        console.log("add operator");

        if (this.state.operator === operator) {
            return;
        }

        if (this.state.operator) {
            const tochange = this.state.expression.slice(0, -3);

            this.setState({
                ...this.state,
                expression: tochange + operator,
                operator: operator,
                currentInput: "",
            });
        }

        this.setState({
            ...this.state,
            expression: this.state.expression + operator,
            operator: operator,
            currentInput: "",
        });
    };

    clearExpression = () => {
        this.setState({
            ...this.state,
            expression: "",
            result: "",
        });
    };

    evalueteExpression = () => {
        this.setState({
            expression: this.state.expression,
            operator: "",
            currentInput: "",
            result: evaluate(this.state.expression),
        });
    };

    render() {
        return (
            <CalculatorWrapper>
                <Calculator>
                    <Display
                        expression={this.state.expression}
                        result={this.state.result}
                    ></Display>
                    <KeyboardRow>
                        <Button color="dark" onButtonClick={this.addOperator}>
                            %
                        </Button>
                        <Button color="dark" onButtonClick={this.addOperator}>
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
