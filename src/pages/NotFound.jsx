import React, { useEffect } from 'react'
import NotFoundPage from '../components/notFoundPage/NotFoundPage'

const NotFound = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Not Found');
    }, []);

    return (
        <div>
            <NotFoundPage />
        </div>
    )
}

export default NotFound
