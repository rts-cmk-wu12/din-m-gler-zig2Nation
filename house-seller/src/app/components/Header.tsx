import { BsTelephone } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex flex-col">
            {/* Topbar */}
            <div className="w-full bg-[#162A41] h-[3em] flex items-center justify-center">
                <div className="max-w-4xl w-full flex justify-between px-8 text-white text-sm">
                    {/* Venstre side */}
                    <div className="flex items-center gap-4">
                        <HiOutlinePaperAirplane />
                        <span>4000@dinmaegler.com</span>
                        <BsTelephone />
                        <span>+45 7070 4000</span>
                    </div>
                    {/* Højre side */}
                    <div className="flex items-center gap-2">
                        <IoPerson />
                        <Link href={'/Login'}>
                            <span>Log ind</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Navigation */}
            <Navigation />
        </header>
    );
}
