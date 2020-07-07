import React from "react";
import styled from "styled-components";

import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";

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

function App() {
    return (
        <CalculatorWrapper>
            <Calculator>
                <Display></Display>
                <Keyboard />
            </Calculator>
        </CalculatorWrapper>
    );
}

export default App;
