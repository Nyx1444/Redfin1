import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import Footer from "../components/Footer/Footer";
const Toggle = ({ isOn, onToggle }) => {
    return ( 
        <div 
            style={{ ...styles.toggle, ...(isOn ? {} : styles.toggleOff) }}
            onClick={onToggle}
        >
            <span style={{ ...styles.toggleText, ...(isOn ? styles.toggleTextOn : {}) }}>
                {isOn ? 'ON' : 'OFF'}
            </span>
            <div style={{ ...styles.toggleHandle, ...(isOn ? styles.toggleHandleOn : {}) }} />
        </div>
    );
};

const NotificationSettings = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#F8F9FA";

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);
    const [isForSaleOn, setForSaleOn] = useState(true);
    const [isForRentOn, setForRentOn] = useState(true);
    const [isForFavOn, setForFavOn] = useState(true);
    return (
        <>
            <Navbar />
            <NavbarUser />
            <div style={styles.container}>
                <h1 style={styles.Title}>Notification settings</h1>

                <section>
                    <h2 style={styles.sectionTitle}>Recommendations</h2>
                    <p style={styles.description}>
                        Discover homes we think you'll like based on your browsing—even ones your Saved Searches may miss.
                    </p>

                    <div style={styles.cardContainer}>
                        <div style={styles.card}>
                            <div style={styles.cardHeader}>
                                <span style={styles.label}>FOR SALE</span>
                            </div>
                            <div style={styles.toggleContainer}>
                                <span style={styles.label}>Email</span>
                                <Toggle isOn={isForSaleOn} onToggle={() => setForSaleOn(!isForSaleOn)} />
                            </div>

                            {isForSaleOn && (
                                <>
                                    <div style={styles.toggleContainer}>
                                        <div>
                                            <div style={styles.label}>Maximum list price</div>
                                            <div style={styles.sublabel}>No max</div>
                                        </div>
                                        <button style={styles.editButton}>Edit</button>
                                    </div>
                                    <div style={styles.toggleContainer}>
                                        <div>
                                            <div style={styles.label}>Locations</div>
                                            <div style={styles.sublabel}>Chicago</div>
                                        </div>
                                        <button style={styles.editButton}>Edit</button>
                                    </div>
                                </>
                            )}
                        </div>

                        <div style={styles.card}>
                            <div style={styles.cardHeader}>
                                <span>FOR RENT</span>
                            </div>
                            <div style={styles.toggleContainer}>
                                <span>Email</span>
                                <Toggle isOn={isForRentOn} onToggle={() => setForRentOn(!isForRentOn)} />
                            </div>
                            {isForRentOn && (
                                <>
                                    <div style={styles.radioGroup}>
                                        <div style={styles.radio}>
                                            <input type="radio" name="frequency" defaultChecked />
                                            <label>Instant</label>
                                        </div>
                                        <div style={styles.radio}>
                                            <input type="radio" name="frequency" />
                                            <label>Daily</label>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 style={styles.sectionTitle}>Favorites</h2>
                    <p style={styles.description}>Get email updates on changes to the homes in your Favorites.</p>
                    <div style={styles.card}>
                        <div style={styles.toggleContainer}>
                            <span>Email</span>
                            <Toggle isOn={isForFavOn} onToggle={() => setForFavOn(!isForFavOn)} />
                        </div>
                        {isForFavOn && (
                                <>
                                    <div style={styles.radioGroup}>
                                        <div style={styles.radio}>
                                            <input type="radio" name="frequency" defaultChecked />
                                            <label>Instant</label>
                                        </div>
                                        <div style={styles.radio}>
                                            <input type="radio" name="frequency" />
                                            <label>Daily</label>
                                        </div>
                                    </div>
                                    <div style={styles.toggleContainer}>
                                        <div>
                                            <div style={styles.label}>Update types</div>
                                            <div style={styles.sublabel}>All</div>
                                        </div>
                                        <button style={styles.editButton}>Edit</button>
                                    </div>
                                </>
                            )}
                    </div>
                </section>


                <section>
                    <h2 style={styles.sectionTitle}>Bulk options</h2>
                    <button style={styles.unsubscribeButton}>
                        Unsubscribe from all emails
                    </button>
                </section>

                <div style={styles.infoBox}>
                    <span>ℹ️</span>
                    <p>
                        Use Redfin on your phone?<br />
                        You can update your push notifications in My Redfin  Settings  Notifications on the Redfin app.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '36px 0px',
        fontFamily: '"Libre Franklin", -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", Helvetica, Arial, sans-serif',
    },
    Title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px'
    },
    sectionTitle: {
        fontSize: '23px',
        fontWeight: 'bold',
        marginBottom: '8px',
        marginTop: '24px',
    },
    description: {
        color: '#666',
        marginBottom: '16px'
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
    },
    cardContainer: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'flex-start'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '24px',
        width: 'calc(50% - 10px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        flexShrink: 0, 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    toggleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
    },
    toggle: {
        width: '64px',
        height: '28px',
        backgroundColor: '#20B2AA',
        borderRadius: '14px', 
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
    },
    toggleOff: {
        backgroundColor: '#666', 
    },
    toggleHandle: {
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '4px',
        left: '4px', 
        transition: 'transform 0.2s',
    },
    toggleHandleOn: {
        transform: 'translateX(36px)', 
    },
    toggleText: {
        position: 'absolute',
        right: '10px', 
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white',
        transition: 'right 0.2s, left 0.2s',
    },
    toggleTextOn: {
        left: '10px', 
        right: 'auto',
    },
    
    editButton: {
        color: '#20B2AA',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '14px'
    },
    label: {
        fontSize: '14px',
        color: '#333'
    },
    sublabel: {
        fontSize: '14px',
        color: '#666',
        marginTop: '4px'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '16px'
    },
    radio: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    infoBox: {
        backgroundColor: '#f0f9ff',
        padding: '16px',
        borderRadius: '8px',
        marginTop: '24px'
    },
    link: {
        color: '#20B2AA',
        textDecoration: 'none'
    },
    unsubscribeButton: {
        padding: '12px 24px',
        border: '2px solid black',
        borderRadius: '8px',
        backgroundColor: 'white',
        cursor: 'pointer',
        width: 'fit-content'
    }
};

export default NotificationSettings;
