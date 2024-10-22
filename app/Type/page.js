"use client";
import VerticalTextContainer from "@/app/gender/navbar";
import React, { useState } from "react";
import '../gender/styles.css';
import "./type.css"

export default function Type() {
    const [Selected, setSelected] = useState(null);

    const handleGenderSelect = (gender) => {
        setSelected(gender);
    };
    return (
        <div>
            <div className="flex flex-col items-center mt-40">
                <span className="font-outfit text-xl tracking-widest mr-4 font-bold text-center text-center-on-small">
                    So...what do you need?
                </span>
                <div className="flex flex-col gap-4 mt-20 max-w-md ml-12">
                    {['Outfit', 'Single Piece',].map((type) => (
                        <div key={type} className="gender-item flex items-center">
                            <div
                                className={`gender-box ${Selected === type ? 'selected' : ''}`}
                                onClick={() => handleGenderSelect(type)}
                            />
                            <p className="font-outfit ml-3 text-xl">{type}</p>
                        </div>
                    ))}
                </div>
            </div>

            <VerticalTextContainer/>

            {/* Divs acting as checkboxes */}

        </div>
    );
}