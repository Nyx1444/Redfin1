import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './styles/Houseforsale.css';

import PropertyCard from '../helpers/Cards/PropertyCard';
import propertyData from '../data/properties';

const Housesforsale = () => {
    return (
        <>
            <Navbar />
            <div className="filters-container">
                <div className="filters">
                    <button className="dropdown">For sale ▾</button>
                    <button className="dropdown">Price ▾</button>
                    <button className="dropdown">Beds/baths ▾</button>
                    <button className="dropdown">Home type ▾</button>
                    <button className="filters-icon">
                        <i className="fas fa-sliders-h"></i> All filters
                    </button>
                    <button className="save-search">Save search</button>
                </div>
                <div className="view-options">
                    <button className="active">List</button>
                    <button>Split</button>
                    <button>Map</button>
                </div>
            </div>

            <div className="listing-header">
                <div className="listing-header-left">
                    <h1>Chicago, IL homes for sale & real estate</h1>
                </div>

                <div className="listing-header-right">
                    <span>
                        <strong>***</strong> of <strong>***</strong> homes
                    </span>
                    <span>
                        Sort: <button className="sort-dropdown">Recommended ▾</button>
                    </span>
                    <span>
                        View: <button className="view-dropdown">Photos ▾</button>
                    </span>
                </div>
            </div>


            {propertyData.map((property) => (
                <div key={property.id}>
                    <PropertyCard property={property} />
                </div>
            ))}

            Viewing page 1 of 9
        </>
    );
};

export default Housesforsale;
