"use client"
import React, { useState } from 'react';
import './checkbox_design.css';
import VerticalTextContainer from '../navbar/navbar.js';
import "./slider.css";

export default function Gender() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [sliderValue, setSliderValue] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handleSpanClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
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
                                onClick={() => handleGenderSelect(gender)}
                            />
                            <p className="font-outfit ml-3 text-xl">I´m {gender}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center mt-8">
                    <span className=" select-none font-outfit text-xl tracking-widest  font-bold text-center text-center-on-small">
                        Hmh, yeah I need your age
                    </span>
                    <div className="flex justify-center items-center mt-6">
                        {isEditing ? (
                            <input
                                type="number"
                                value={sliderValue}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onKeyDown={handleInputKeyDown}
                                className="font-outfit text-xl text-center"
                            />
                        ) : (
                            <span
                                className="font-outfit text-xl"
                                onClick={handleSpanClick}
                            >
                                {sliderValue}
                            </span>
                        )}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="99"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="slider"
                    />
                    <div className="flex justify-between w-full mt-2">
                        <span className={"font-outfit"}>0</span>
                        <span className={"font-outfit"}>99</span>
                    </div>
                </div>
            </div>
            <VerticalTextContainer />
        </>
    );
}