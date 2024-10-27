'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';  // Import Link from next/link
import './style.css';
import backround_video from "@/app/videos/backround.mp4"

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
        <div className="main" style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
                <source src={backround_video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={"mt-80"}>
                <div className="text-center text-white">
                    {/* First line: YOUR and STYLE side by side */}
                    <div className="flex space-x-2 mt-32">
                        <span className="font-outfit text-4xl tracking-widest mainText ">YOUR</span>
                        <span className="font-originalsurfer text-4xl tracking-wider mainText ">STYLE</span>
                    </div>
                    {/* Second line: YOUR and STATEMENT side by side */}
                    <div className="flex space-x-2 ">
                        <span className="font-outfit  tracking-widest mainText">YOUR</span>
                        <span className="font-originalsurfer  tracking-wider mainText">STATEMENT</span>
                    </div>
                </div>
            </div>
            {/* Wrap the button with a Link component */}
            <Link href="/gender">
                <button className="btn mb-10"><span className="font-outfit">Configure Now</span></button>
            </Link>
        </div>
    );
}