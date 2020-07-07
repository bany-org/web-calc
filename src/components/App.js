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
        };
    }

    changeExpression = (value) => {
        this.setState({ expression: this.state.expression + value });
    };

    clearExpression = () => {
        this.setState({
            expression: "",
            result: "",
        });
    };

    evalueteExpression = () => {
        this.setState({
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
                        <Button color="dark">%</Button>
                        <Button color="dark">+/-</Button>
                        <Button
                            color="dark"
                            onButtonClick={this.clearExpression}
                        >
                            C
                        </Button>
                        <Button color="violet">/</Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.changeExpression}>7</Button>
                        <Button onButtonClick={this.changeExpression}>8</Button>
                        <Button onButtonClick={this.changeExpression}>9</Button>
                        <Button
                            onButtonClick={this.changeExpression}
                            color="violet"
                        >
                            *
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.changeExpression}>4</Button>
                        <Button onButtonClick={this.changeExpression}>5</Button>
                        <Button onButtonClick={this.changeExpression}>6</Button>
                        <Button
                            onButtonClick={this.changeExpression}
                            color="violet"
                        >
                            -
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button onButtonClick={this.changeExpression}>1</Button>
                        <Button onButtonClick={this.changeExpression}>2</Button>
                        <Button onButtonClick={this.changeExpression}>3</Button>
                        <Button
                            color="violet"
                            onButtonClick={this.changeExpression}
                        >
                            +
                        </Button>
                    </KeyboardRow>
                    <KeyboardRow>
                        <Button>0</Button>
                        <Button>,</Button>
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
