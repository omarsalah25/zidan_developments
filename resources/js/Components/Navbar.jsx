import React, { useEffect, useState } from 'react'

const Navbar = () => {


    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY])


    return (
        <nav
            dir='rtl'
            className={` flex flex-row justify-between items-center px-12 py-5 bg-white top-0 left-0 w-full z-10 sticky transition-transform duration-300 ease-in-out transform ${!showNavbar ? "translate-y-[-100%]" : ""
                }`}
        >
            <div className="w-full">
                <img src="logo.png" className="w-32 h-full object-contain mix-blend-difference" />
            </div>
            <div className="w-full flex flex-row items-end justify-end">
                <button onClick={() => window.location.href = '#contact'} className="cursor-pointer w-fit bg-white text-sm p-2 rounded-full font-Poppins-medium text-black capitalize">
                    call us now
                </button>
            </div>
        </nav>
    )
}

export default Navbar
