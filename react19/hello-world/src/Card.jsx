import React from 'react'
export const Card = () => {
    return (
        <div id = "card">
            <h2>Welcome</h2>
            <p>This is a <span id="highlight">Nice</span> Card Element</p>
            <button>Click Me!</button>
        </div>
    )
}

export const CardWithoutJSX = () => {
    return React.createElement(
        "div",
        {id:"card"},
        React.createElement(
            "h2",
            null,
            "Welcome"
        ),
        React.createElement(
            "p",
            null,
            "This is a",
            React.createElement(
                "span",
                {id:"highlight"},
                "Nice"
            ),
            "Card Element"
        ),
        React.createElement("button",null,"Click Me!")
    )
}