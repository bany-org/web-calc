import React from "react";
import styled from "styled-components";
import { evaluate } from "mathjs";

const Expression = styled.div`
    background-color: green;
    font-size: 900;
    text-align: center;
`;

function App() {
    return (
        <div className="App">
            <Expression>
                <h1> test math</h1>
                <h2>{evaluate("2 * 4 + 3")}</h2>
            </Expression>
        </div>
    );
}

export default App;
