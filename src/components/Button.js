import React from "react";
import styled, { css } from "styled-components";

const CalcButton = styled.div`
    width: 92px;
    height: 92px;
    background-image: linear-gradient(to right, #ffffff, #f4f4f4);
    font-family: Lato;
    font-size: 23px;
    font-weight: 300;
    color: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    :hover {
        font-weight: 700;
    }

    ${(props) =>
        props.color === "violet" &&
        css`
            background-color: #9156e1;
            background-image: none;
            color: #ffffff;
        `}

    ${(props) =>
        props.color === "dark" &&
        css`
            background-image: linear-gradient(to right, #f7f7f7, #f1f1f1);
        `}

    ${(props) =>
        props.color === "pink" &&
        css`
            background-color: #e62f89;
            background-image: none;
            color: #ffffff;
            flex: 2;
        `}
`;

const Button = (props) => {
    return (
        <CalcButton
            color={props.color}
            onClick={() => props.onButtonClick(props.children)}
        >
            {props.children}
        </CalcButton>
    );
};

export default Button;
