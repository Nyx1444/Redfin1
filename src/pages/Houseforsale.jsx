import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useGlobalEvent } from '../context/GlobalEventContext';
import { useNavigate, useLocation } from 'react-router-dom';
import PropertyCard from '../helpers/Cards/PropertyCard';
import properties from '../data/properties'; 

const Housesforsale = () => {
    const { windowSize } = useGlobalEvent();
    const isMobileView = windowSize.width < 768;
    const navigate = useNavigate();
    const location = useLocation();

    const itemsPerPage = 4;
    const queryParams = new URLSearchParams(location.search);

    // ✅ ดึงค่าหน้าปัจจุบันจาก URL (default = 1)
    const initialPage = parseInt(queryParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    // ✅ ตัวกรองเริ่มต้น
    const [selectedOptions, setSelectedOptions] = useState({
        comingSoon: true,
        active: true,
        underContract: true,
    });

    const [showDropdown, setShowDropdown] = useState(false);

    // ✅ ใช้ `properties` ที่ import มา
    const filteredProperties = properties.filter((property) => {
        return selectedOptions.active; // ⚡ ตอนนี้แสดงทั้งหมด
    });

    // ✅ Pagination
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProperties = filteredProperties.slice(startIndex, endIndex);

    // ✅ ป้องกันการเรียก `navigate()` ซ้ำ
    useEffect(() => {
        const currentQueryPage = parseInt(queryParams.get('page')) || 1;
        if (currentQueryPage !== currentPage) {
            navigate(`?page=${currentPage}`, { replace: true });
        }
    }, [currentPage, navigate]);

    // ✅ อัปเดต state เมื่อเปลี่ยน URL
    useEffect(() => {
        const page = parseInt(queryParams.get('page')) || 1;
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    }, [location.search]);

    // ✅ อัปเดตตัวกรอง
    const handleOptionChange = (option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    return (
        <>
            {/* ✅ แสดงการ์ด */}
            <div className="property-grid">
                {currentProperties.length > 0 ? (
                    currentProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <p>No properties available on this page.</p>
                )}
            </div>

            {/* ✅ Pagination */}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Housesforsale;
