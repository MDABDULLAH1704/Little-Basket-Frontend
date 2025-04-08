import React, { useState, useEffect } from 'react'
import './Alert.css'

const Alert = (props) => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        return () => clearTimeout(timer);  // Clean up the timer to avoid memory leaks
    }, []);

    return (
        <>
            {showAlert && (
                <div className='alert'>
                    <p><b>{props.alert}</b></p>
                </div>
            )}
        </>
    )
}

export default Alert
