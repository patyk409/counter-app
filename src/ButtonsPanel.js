import React from 'react'
import './ButtonsPanel.css'

function ButtonsPanel (props) {
    return (
        <div className="buttons-panel">
            <button onClick={() => {props.buttonsMethod('add')}}>Add 1</button>
            <button onClick={() => {props.buttonsMethod('reinit')}}>ReInit</button>
            <button onClick={() => {props.buttonsMethod('reset')}}>Reset</button>
        </div>
    )
}

export default ButtonsPanel
