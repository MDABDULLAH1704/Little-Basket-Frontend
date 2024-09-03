import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <div className='input'>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
