"use client";
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const HorizontalScroll = () => {
    const numbers = Array.from({ length: 100 }, (_, i) => i); // Start from 0
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active index

    const containerRef = useRef(null); // Reference to the container

    useEffect(() => {
        const checkActiveSpan = () => {
            const spans = containerRef.current.querySelectorAll('span');
            const borderRect = document.querySelector('.rechteckig-rote-border').getBoundingClientRect();

            spans.forEach((span, index) => {
                const spanRect = span.getBoundingClientRect();
                // Check if the span is within the red border area
                if (
                    spanRect.left < borderRect.right &&
                    spanRect.right > borderRect.left &&
                    spanRect.top < borderRect.bottom &&
                    spanRect.bottom > borderRect.top
                ) {
                    setActiveIndex(index); // Set the active index
                }
            });
        };

        const container = containerRef.current;
        container.addEventListener('scroll', checkActiveSpan); // Event listener for scroll on the container

        // Check on initial load
        checkActiveSpan();

        // Scroll to the initial position to center the number 1
        const initialScrollPosition = 85; // Adjust this value as needed
        container.scrollTo({ left: initialScrollPosition, behavior: 'smooth' });

        return () => {
            container.removeEventListener('scroll', checkActiveSpan); // Clean up the event listener
        };
    }, []);

    useEffect(() => {
        if (activeIndex !== null && typeof window !== 'undefined') {
            localStorage.setItem('selectedAge', activeIndex);
        }
    }, [activeIndex]);

    return (
        <div ref={containerRef} className="font-outfit relative flex mr-32 mt-80 overflow-x-scroll whitespace-nowrap p-5 w-full scrollbar-hide">
            {numbers.map((number, index) => (
                <span key={number} className={`mx-7 text-9xl font-bold ${activeIndex === index ? 'active' : ''}`}>
                    {number}
                </span>
            ))}
        </div>
    );
};

export default function Page() {
    return (
        <>
            <div className="rechteckig-rote-border"></div>
            <HorizontalScroll />
        </>
    );
}