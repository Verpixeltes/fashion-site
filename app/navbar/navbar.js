import React, { useEffect } from 'react';
import './navbar.css';

const VerticalTextContainer = () => {
    useEffect(() => {
        const navLinks = document.querySelectorAll('.vtext');
        const currentPathUrl = window.location.pathname;

        // Set the active class based on the current URL
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPathUrl) {
                link.classList.add('active');
            }
        });

        // Add event listener to prevent animation and color change on click
        const onNavLinkClick = (clickEvent) => {
            clickEvent.preventDefault(); // Prevent the default anchor behavior
            const clickedLink = clickEvent.target;

            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add the 'active-no-anim' class to the clicked link
            clickedLink.classList.add('active-no-anim');

            // Navigate to the new page
            window.location.href = clickedLink.href;
        };

        // Add the click event listener to each link
        navLinks.forEach(link => link.addEventListener('click', onNavLinkClick));

        // Cleanup: Remove the event listeners when the component unmounts
        return () => {
            navLinks.forEach(link => link.removeEventListener('click', onNavLinkClick));
        };
    }, []);

    return (
        <div className="absolute left-0 grid h-72 w-12 vertical_container"
             style={{transform: 'translateY(-50%)'}}>
            <a href="/gender"
               className="transform rotate-90  text-base font-light font-outfit text-gray-300 vtext">Gender</a>
            <a href="/Type"
               className="transform rotate-90 whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Type</a>
            <a href="/piece"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Piece</a>
            <a href="/size"
               className="transform rotate-90 whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Size</a>
            <a href="/condition"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Condition</a>
            <a href="#"
               className="transform rotate-90-conditions whitespace-nowrap text-base font-light font-outfit text-gray-300 vtext">Style</a>
        </div>
    );
};

export default VerticalTextContainer;
