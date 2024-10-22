'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';  // Import Link from next/link
import menu_3 from "./images/menu_3.png";
import './style.css';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    if (!isMobile) {
        return <div className="desktop-message">Work for desktop in progress</div>;
    }

    return (
        <div className="main" style={{ backgroundImage: `url(${menu_3.src})`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className={"mt-96"}>
                <div className="text-center text-white">
                    {/* First line: YOUR and STYLE side by side */}
                    <div className="flex space-x-2">
                        <span className="font-outfit text-4xl tracking-widest">YOUR</span>
                        <span className="font-originalsurfer text-4xl tracking-wider">STYLE</span>
                    </div>
                    {/* Second line: YOUR and STATEMENT side by side */}
                    <div className="flex space-x-2 mt-4">
                        <span className="font-outfit text-4xl tracking-widest">YOUR</span>
                        <span className="font-originalsurfer text-4xl tracking-wider">STATEMENT</span>
                    </div>
                </div>
            </div>
            {/* Wrap the button with a Link component */}
            <Link href="/gender">
                <button className="btn mt-6"><span className="font-outfit">Configure Now</span></button>
            </Link>
        </div>
    );
}
