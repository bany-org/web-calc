import React from "react";
import styled from "styled-components";

const DisplayArea = styled.div`
    width: 100%;
    height: 140px;
    background-color: #212121;
    color: #ffffff;
    display: flex;
    flex-direction: column;
`;

const ExpressionRow = styled.div`
    height: 100%;
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
    console.log("result", val);

    if (val > 999999999 || val.toString().length > 10) {
        val = val.toExponential(4);
        console.log("val po toExp,", val, val.length, val.toString().length);
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
