'use client';
import VerticalTextContainer from "@/app/navbar/navbar";
import React, { useState, useEffect } from "react";
import '../gender/checkbox_design.css';

export default function Type() {
    const [Selected, setSelected] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedSelected = localStorage.getItem('selectedCondition');
            return storedSelected ? JSON.parse(storedSelected) : [];
        }
        return [];
    });

    const handleSelect = (type) => {
        setSelected((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter((item) => item !== type)
                : [...prevSelected, type]
        );
    };


    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedCondition', JSON.stringify(Selected));
        }
    }, [Selected]);

    return (
        <div>
            <div className="flex flex-col items-center mt-40 ml-10">
                <span className="font-outfit text-xl tracking-widest mr-9 font-bold text-center">
                    New? Used? Or both?
                </span>
                <div className="flex flex-col gap-4 mt-10 max-w-md ml-12">
                    {['NEW',"USED"].map((type) => (
                        <div key={type} className="gender-item flex items-center">
                            <div
                                className={`configurator_checkbox ${Selected.includes(type) ? 'selected' : ''}`}
                                onClick={() => handleSelect(type)}
                            />
                            <p className="font-outfit ml-3 text-xl">{type}</p>
                        </div>
                    ))}
                </div>

                <VerticalTextContainer />
            </div>
        </div>
    );
}
