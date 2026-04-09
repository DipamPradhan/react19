import React from 'react'
export const Hello = () => {
    return (
        <div id = "container">
            <h1>Hello, React!</h1>
        </div>
    )
}

export const HelloWithoutJSX = () => {
    return React.createElement(
        'div',
        {id: 'container'},
        React.createElement('h1', null, 'Hello, React! no jsx')
    )
}   