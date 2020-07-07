import React from "react";
import styled from "styled-components";

const DisplayArea = styled.div`
    width: 368px;
    height: 140px;
    background-color: #212121;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    /* justify-content: right; */
    /* padding-top: 30px; */
    /* padding-right: 27px; */
`;

const ExpressionRow = styled.div`
    /* width: 160px; */
    /* width: 100%; */
    /* height: 16px; */
    font-family: Lato;
    font-size: 18px;
    /* font-weight: normal; */
    /* font-stretch: normal; */
    /* font-style: normal; */
    /* line-height: 3.89; */
    letter-spacing: normal;
    text-align: right;
    color: #d98192;
    padding-top: 28px;
    padding-right: 28px;
`;

const ResultRow = styled.div`
    /* width: 118px; */
    /* width: 100%; */
    /* height: 42px; */
    margin-top: 18px;
    font-family: Lato;
    font-size: 50px;
    font-weight: 300;
    /* font-stretch: normal; */
    /* font-style: normal; */
    /* line-height: 1.4; */
    /* letter-spacing: normal; */
    text-align: right;
    color: #ffffff;
    padding-right: 28px;
`;

const Display = () => {
    return (
        <DisplayArea>
            <ExpressionRow>1+25</ExpressionRow>
            <ResultRow>4</ResultRow>
        </DisplayArea>
    );
};

export default Display;
