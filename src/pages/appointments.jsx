import React, { useState } from 'react';
import Navbar from "../components/Navbar/Navbar";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import Footer from "../components/Footer/Footer";
import { useGlobalEvent } from '../context/GlobalEventContext';
const Appointments = () => {
    const { windowSize } = useGlobalEvent();
    const isMobileView = windowSize.width < 980;
    return (
        <>
            <Navbar />
            <NavbarUser />
            <div style={{ ...styles.wrapper, margin: isMobileView ? '0 16px' : '0 140px' }}>

            </div>
            <Footer />
        </>
    );
};

const styles = {
    global: {
        fontFamily: '"Libre Franklin", -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", Helvetica, Arial, sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    wrapper: {
        margin: "0 140px",
    },
}

export default Appointments;
