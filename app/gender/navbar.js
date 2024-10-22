import React, { useEffect } from 'react';
import './navbar.css';

const VerticalTextContainer = () => {
    useEffect(() => {
        const links = document.querySelectorAll('.vtext');
        const currentPath = window.location.pathname;

        // Set the active class based on the current URL
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

        // Add event listener to prevent animation and color change on click
        const handleClick = (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetLink = event.target;

            // Remove the 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add the 'active-no-anim' class to the clicked link
            targetLink.classList.add('active-no-anim');

            // Navigate to the new page
            window.location.href = targetLink.href;
        };

        // Add the click event listener to each link
        links.forEach(link => link.addEventListener('click', handleClick));

        // Cleanup: Remove the event listeners when the component unmounts
        return () => {
            links.forEach(link => link.removeEventListener('click', handleClick));
        };
    }, []);

    return (
        <div className="absolute left-0 grid gap-4 h-72 w-24 vertical_container"
             style={{transform: 'translateY(-50%)'}}>
            <a href="/gender"
               className="transform rotate-90 whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Gender</a>
            <a href="/Type"
               className="transform rotate-90 whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Type</a>
            <a href="/piece"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Piece</a>
            <a href="#"
               className="transform rotate-90 whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Size</a>
            <a href="#"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Condition</a>
            <a href="#"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Style</a>
        </div>
    );
};

export default VerticalTextContainer;
