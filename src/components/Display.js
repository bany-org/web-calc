import React from "react";
import styled, { css } from "styled-components";

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
    word-break: break-all;
`;

const Display = ({ values }) => {
    let val = values.result;
    console.log("val", val);

    if (val.toString().length > 9) {
        console.log("val >");

        val = val.toExponential();
    }

    return (
        <DisplayArea>
            <ExpressionRow>
                {values.expression + values.operator + values.currentInput}
            </ExpressionRow>
            <ResultRow>{val}</ResultRow>
        </DisplayArea>
    );
};

export default Display;
