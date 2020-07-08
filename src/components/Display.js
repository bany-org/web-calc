import React from "react";
import styled from "styled-components";

const DisplayArea = styled.div`
    width: 368px;
    height: 140px;
    background-color: #212121;
    color: #ffffff;
    display: flex;
    flex-direction: column;
`;

const ExpressionRow = styled.div`
    font-family: Lato;
    font-size: 18px;
    letter-spacing: normal;
    text-align: right;
    color: #d98192;
    padding-top: 28px;
    padding-right: 28px;
`;

const ResultRow = styled.div`
    margin-top: 18px;
    font-family: Lato;
    font-size: 50px;
    font-weight: 300;
    text-align: right;
    color: #ffffff;
    padding-right: 28px;
`;

const Display = ({ values }) => {
    return (
        <DisplayArea>
            <ExpressionRow>
                {values.expression + values.operator + values.currentInput}
            </ExpressionRow>
            <ResultRow>{values.result}</ResultRow>
        </DisplayArea>
    );
};

export default Display;
