'use client';
import React, { useState, useEffect } from 'react';
import './checkbox_design.css';
import VerticalTextContainer from '../navbar/navbar.js';


export default function GenderSelection() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [age, setAge] = useState(0);
    const [isEditingAge, setIsEditingAge] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedGender = localStorage.getItem('selectedGender');
            const savedAge = localStorage.getItem('selectedAge');

            if (savedGender) {
                setSelectedGender(savedGender);
            }

            if (savedAge) {
                setAge(Number(savedAge));
            }
        }
    }, []);

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedGender', gender);
        }
    };

    const handleAgeSpanClick = () => {
        setIsEditingAge(true);
    };

    const handleAgeInputChange = (event) => {
        setAge(event.target.value);
    };

    const handleAgeInputBlur = () => {
        setIsEditingAge(false);
    };

    const handleAgeInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsEditingAge(false);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center mt-40 ml-10 select-none">
                <span className="font-outfit text-xl tracking-widest ml-3 font-bold text-center text-center-on-small">
                    Please select your gender
                </span>
                <div className="flex flex-col gap-4 mt-10 max-w-md ml-12">
                    {['Male', 'Female', 'Divers'].map((gender) => (
                        <div key={gender} className="gender-item flex items-center">
                            <div
                                className={`configurator_checkbox ${selectedGender === gender ? 'selected' : ''}`}
                                onClick={() => handleGenderClick(gender)}
                            />
                            <p className="font-outfit ml-3 text-xl">I´m {gender}</p>
                        </div>
                    ))}
                </div>

            </div>
            <VerticalTextContainer />
        </>
    );
}