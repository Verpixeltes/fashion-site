'use client';
import VerticalTextContainer from "@/app/navbar/navbar";
import React, { useState, useEffect } from "react";
import '../gender/checkbox_design.css';
import './piece.css';

export default function Type() {
    const [Selected, setSelected] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedSelected = localStorage.getItem('selectedPieces');
            return storedSelected ? JSON.parse(storedSelected) : [];
        }
        return [];
    });
    const [toggleChecked, setToggleChecked] = useState(true);

    const handleSelect = (type) => {
        setSelected((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter((item) => item !== type)
                : [...prevSelected, type]
        );
    };

    const handleToggle = () => {
        setToggleChecked((prev) => !prev);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedPieces', JSON.stringify(Selected));
        }
    }, [Selected]);

    return (
        <div>
            <div className="flex flex-col items-center mt-40 ml-10">
                <span className="font-outfit text-xl tracking-widest mr-4 font-bold text-center">
                    Now I need what piece
                </span>

                <div className="flex items-center justify-center mt-4 mr-10">
                    <span className="mr-2 font-outfit">Bottom</span>
                    <label className="switch">
                        <input type="checkbox" checked={toggleChecked} onChange={handleToggle} />
                        <span className="slider round"></span>
                    </label>
                    <span className="ml-2 font-outfit">Top</span>
                </div>

                {toggleChecked ? (
                    <div className="flex flex-col gap-4 mt-4 max-w-md ml-12">
                        {['T-Shirt', 'Hoodie'].map((type) => (
                            <div key={type} className="gender-item flex items-center">
                                <div
                                    className={`configurator_checkbox ${Selected.includes(type) ? 'selected' : ''}`}
                                    onClick={() => handleSelect(type)}
                                />
                                <p className="font-outfit ml-3 text-xl">{type}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 mt-4 max-w-md ml-12">
                        {['Cap', 'Scarf', "Gloves", "LOL"].map((type) => (
                            <div key={type} className="gender-item flex items-center">
                                <div
                                    className={`configurator_checkbox ${Selected.includes(type) ? 'selected' : ''}`}
                                    onClick={() => handleSelect(type)}
                                />
                                <p className="font-outfit ml-3 text-2xl">{type}</p>
                            </div>
                        ))}
                    </div>
                )}
                <VerticalTextContainer />
            </div>
        </div>
    );
}
