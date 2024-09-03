import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt={props.name} onClick={window.scrollTo(0, 0)} />
            </Link>
            <p className='item-name'>{props.name}</p>
            <p className='item-mass'>{props.mass}</p>
            <div className="price">
                <div className="new-price"><b>&#8377;{props.newPrice}</b></div>
                <div className='old-price'>&#8377;{props.oldPrice}</div>
            </div>
        </div>
    )
}

export default Item
