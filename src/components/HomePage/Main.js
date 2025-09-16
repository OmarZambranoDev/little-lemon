import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./styles/Main.css";

const Main = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main className="main-content">
            {children}
        </main>
    );
}

export default Main;
