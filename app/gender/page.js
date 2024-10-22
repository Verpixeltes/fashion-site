"use client"
import React, { useState } from 'react';
import './styles.css';
import VerticalTextContainer from './navbar.js';

export default function Gender() {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <>
            <div className="flex flex-col items-center mt-40">
                <span className="font-outfit text-xl tracking-widest ml-3 font-bold text-center text-center-on-small">
                    Please select your gender
                </span>
                <div className="flex flex-col gap-4 mt-20 max-w-md ml-12">
                    {['Male', 'Female', 'Divers'].map((gender) => (
                        <div key={gender} className="gender-item flex items-center">
                            <div
                                className={`gender-box ${selectedGender === gender ? 'selected' : ''}`}
                                onClick={() => handleGenderSelect(gender)}
                            />
                            <p className="font-outfit ml-3 text-xl">I´m {gender}</p>
                        </div>
                    ))}
                </div>
            </div>
                <VerticalTextContainer/>
        </>
    );
}