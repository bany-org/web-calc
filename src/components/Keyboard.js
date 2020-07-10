import React from "react";
import styled from "styled-components";

import Button from "./Button";

const KeyboardRow = styled.div`
    display: flex;
    height: 100%;
    margin: 0;
`;

const Keyboard = ({
    calcPercentage,
    clearExpression,
    changeSign,
    addDecimal,
    addNumber,
    addOperator,
    evalueteExpression,
}) => {
    return (
        <>
            <KeyboardRow>
                <Button color="dark" onButtonClick={calcPercentage}>
                    %
                </Button>
                <Button color="dark" onButtonClick={changeSign}>
                    +/-
                </Button>
                <Button color="dark" onButtonClick={clearExpression}>
                    C
                </Button>
                <Button color="violet" onButtonClick={addOperator}>
                    {" / "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumber}>7</Button>
                <Button onButtonClick={addNumber}>8</Button>
                <Button onButtonClick={addNumber}>9</Button>
                <Button onButtonClick={() => addOperator(" * ")} color="violet">
                    x
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumber}>4</Button>
                <Button onButtonClick={addNumber}>5</Button>
                <Button onButtonClick={addNumber}>6</Button>
                <Button onButtonClick={addOperator} color="violet">
                    {" - "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumber}>1</Button>
                <Button onButtonClick={addNumber}>2</Button>
                <Button onButtonClick={addNumber}>3</Button>
                <Button color="violet" onButtonClick={addOperator}>
                    {" + "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumber}>0</Button>
                <Button onButtonClick={addDecimal}>,</Button>
                <Button color="pink" onButtonClick={evalueteExpression}>
                    =
                </Button>
            </KeyboardRow>
        </>
    );
};

export default Keyboard;
