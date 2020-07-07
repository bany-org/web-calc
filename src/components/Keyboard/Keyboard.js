import React from "react";
import styled, { css } from "styled-components";

const Button = styled.div`
    width: 92px;
    height: 92px;
    background-image: linear-gradient(to right, #ffffff, #f4f4f4);

    font-family: Lato;
    font-size: 23px;
    font-weight: 300;
    /* font-stretch: normal; */
    /* font-style: normal; */
    /* line-height: 3.04; */
    /* letter-spacing: normal; */
    /* text-align: right; */
    color: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    ${(props) =>
        props.color === "violet" &&
        css`
            background-color: #9156e1;
            background-image: none;
            color: #ffffff;
        `}
    ${(props) =>
        props.color === "pink" &&
        css`
            background-color: #e62f89;
            background-image: none;
            color: #ffffff;
            flex: 2;
        `}

    ${(props) =>
        props.firstRow === true &&
        css`
            background-image: linear-gradient(to right, #f7f7f7, #f1f1f1);
        `}  
`;

const KeyboardRow = styled.div`
    display: flex;
`;

const Keyboard = () => {
    return (
        <div>
            <KeyboardRow>
                <Button firstRow>%</Button>
                <Button firstRow>+/-</Button>
                <Button firstRow>C</Button>
                <Button color="violet">/</Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button color="violet">*</Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button color="violet">-</Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button color="violet">+</Button>
            </KeyboardRow>
            <KeyboardRow>
                <Button>0</Button>
                <Button>,</Button>
                <Button color="pink">=</Button>
            </KeyboardRow>
        </div>
    );
};

export default Keyboard;
