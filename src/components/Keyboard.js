import React from "react";
import styled from "styled-components";

import Button from "./Button";

const KeyboardRow = styled.div`
    display: flex;
    height: 100%;
    margin: 0;
`;

const Keyboard = ({
    convertPercentageToNumber,
    clearExpression,
    changeCurrentInputSign,
    addDecimalToExpression,
    addNumberToExpression,
    addOperatorToExpression,
    evalueteExpression,
}) => {
    return (
        <>
            <KeyboardRow>
                <Button color="dark" onButtonClick={convertPercentageToNumber}>
                    %
                </Button>
                <Button color="dark" onButtonClick={changeCurrentInputSign}>
                    +/-
                </Button>
                <Button color="dark" onButtonClick={clearExpression}>
                    C
                </Button>
                <Button color="violet" onButtonClick={addOperatorToExpression}>
                    {" / "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumberToExpression}>7</Button>
                <Button onButtonClick={addNumberToExpression}>8</Button>
                <Button onButtonClick={addNumberToExpression}>9</Button>
                <Button
                    onButtonClick={() => addOperatorToExpression(" * ")}
                    color="violet"
                >
                    x
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumberToExpression}>4</Button>
                <Button onButtonClick={addNumberToExpression}>5</Button>
                <Button onButtonClick={addNumberToExpression}>6</Button>
                <Button onButtonClick={addOperatorToExpression} color="violet">
                    {" - "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumberToExpression}>1</Button>
                <Button onButtonClick={addNumberToExpression}>2</Button>
                <Button onButtonClick={addNumberToExpression}>3</Button>
                <Button color="violet" onButtonClick={addOperatorToExpression}>
                    {" + "}
                </Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button onButtonClick={addNumberToExpression}>0</Button>
                <Button onButtonClick={addDecimalToExpression}>,</Button>
                <Button color="pink" onButtonClick={evalueteExpression}>
                    =
                </Button>
            </KeyboardRow>
        </>
    );
};

export default Keyboard;
