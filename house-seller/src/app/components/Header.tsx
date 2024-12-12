"use client"; // Markerer komponenten som client-side

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import HeaderLogin from "./HeaderLogin";
import { useRouter } from "next/navigation"; // Bruger useRouter til navigation
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Henter token fra cookies på klienten
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("dm_token="))
            ?.split("=")[1];

        if (!token) {
            // Hvis der ikke er token, omdiriger til login-siden
            router.push("/Login");
        } else {
            setIsLoggedIn(true); // Hvis token findes, opdater login-status
        }
    }, [router]);

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
                    {/* Passér login-status som en boolean til HeaderLogin */}
                    <HeaderLogin isLoggedIn={isLoggedIn} />
                </div>
            </div>
            <Navigation />
        </header>
    );
}
