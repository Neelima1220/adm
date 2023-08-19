import React, { useEffect, useState } from 'react'

const useHelper = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showShipments, setShowShipments] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth <= 950); 
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

  return {isMobile, showShipments, setShowShipments}
}

export default useHelper