"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import HeaderLogin from "./HeaderLogin";

import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("dm_token="))
            ?.split("=")[1];

            if(token) {
                setIsLoggedIn(true)
            }
    }, []);

    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-[#162A41] h-[3em] flex items-center justify-center">
                <div className="max-w-[60rem] w-full flex justify-between text-white text-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <FaPaperPlane />
                            <span>4000@dinmaegler.com</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FaPhoneAlt />
                            <span>+45 7070 4000</span>
                        </div>
                    </div>
                    <HeaderLogin isLoggedIn={isLoggedIn} />
                </div>
            </div>
            <Navigation />
        </header>
    );
}
