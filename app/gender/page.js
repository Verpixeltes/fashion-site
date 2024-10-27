"use client"
import React, { useState, useEffect } from 'react';
import './checkbox_design.css';
import VerticalTextContainer from '../navbar/navbar.js';
import "./slider.css";

export default function GenderSelection() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [age, setAge] = useState(0);
    const [isEditingAge, setIsEditingAge] = useState(false);

    useEffect(() => {
        const savedGender = localStorage.getItem('selectedGender');
        const savedAge = localStorage.getItem('selectedAge');

        if (savedGender) {
            setSelectedGender(savedGender);
        }

        if (savedAge) {
            setAge(Number(savedAge));
        }
    }, []);

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
        localStorage.setItem('selectedGender', gender);
    };

    const handleAgeSliderChange = (event) => {
        const newAge = event.target.value;
        setAge(newAge);
        localStorage.setItem('selectedAge', newAge);
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
                <div className="flex flex-col items-center mt-8">
                    <span className="select-none font-outfit text-xl tracking-widest mr-10 font-bold text-center text-center-on-small">
                        Hmh, I need your age
                    </span>
                    <div className="flex justify-center items-center mt-6">
                        {isEditingAge ? (
                            <input
                                type="number"
                                value={age}
                                onChange={handleAgeInputChange}
                                onBlur={handleAgeInputBlur}
                                onKeyDown={handleAgeInputKeyDown}
                                className="font-outfit text-xl text-center"
                            />
                        ) : (
                            <span
                                className="font-outfit text-xl"
                                onClick={handleAgeSpanClick}
                            >
                                {age}
                            </span>
                        )}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="99"
                        value={age}
                        onChange={handleAgeSliderChange}
                        className="slider"
                    />
                    <div className="flex justify-between w-full mt-2">
                    </div>
                </div>
            </div>
            <VerticalTextContainer />
        </>
    );
}