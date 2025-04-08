import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { HomeContext } from '../../context/HomeContext'
import Alert from '../alert/Alert'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(HomeContext);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product.id);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    }

    return (
        <>
            <div className='productDisplay'>
                <div className="productDisplay-left">
                    <div className='productDisplay-img'><img src={product.image} alt={product.name} onClick={window.scrollTo(0, 0)} /></div>
                </div>
                <div className="productDisplay-right">
                    <div className='productDisplay-name'>{product.name}</div>
                    <div className='productDisplay-oldPrice'><pre>MRP    : <span>&#8377;{product.oldPrice}</span></pre></div>
                    <div className='productDisplay-newPrice'><pre>Price  : <span>&#8377;{product.newPrice}</span></pre></div>
                    <div className='productDisplay-mass'><pre>Weight : {product.mass}</pre></div>
                    <div className='productDisplay-btn'>
                        <button onClick={handleAddToCart}> <b>Add to Basket</b> </button>
                    </div>
                </div>
            </div >

            <div className='productDisplay-detail'>
                <h3>About The Product</h3>
                <p>{product.detail}</p>
            </div>

            <div className="moveToPreviousPage">
                <span onClick={handleBackClick}> <FaArrowLeft /> Back</span>
            </div>

            {showAlert === true && <Alert alert='Added to Basket' />}
        </>
    )
}

export default ProductDisplay
