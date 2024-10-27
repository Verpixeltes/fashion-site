'use client';
import VerticalTextContainer from "@/app/navbar/navbar";
import React, { useState, useEffect } from "react";
import '../gender/checkbox_design.css';

export default function Type() {
    const [Selected, setSelected] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('selectedType') || null;
        }
        return null;
    });

    const handleGenderSelect = (type) => {
        setSelected(type);
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedType', type);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center mt-40 ml-10">
                <span className="font-outfit text-xl tracking-widest mr-4 font-bold text-center text-center-on-small">
                    So...what do you need?
                </span>
                <div className="flex flex-col gap-4 mt-10 max-w-md ml-12">
                    {['Outfit', 'Single Piece'].map((type) => (
                        <div key={type} className="gender-item flex items-center">
                            <div
                                className={`configurator_checkbox ${Selected === type ? 'selected' : ''}`}
                                onClick={() => handleGenderSelect(type)}
                            />
                            <p className="font-outfit ml-3 text-xl">{type}</p>
                        </div>
                    ))}
                </div>
            </div>

            <VerticalTextContainer />
        </div>
    );
}
