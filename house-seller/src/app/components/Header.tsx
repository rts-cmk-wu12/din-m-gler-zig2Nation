import { BsTelephone } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import Navigation from "./Navigation";

export default function Header() {
    return(
        <header className="w-full flex flex-col">
            <div className="w-full bg-[#162A41] h-[3em]">
                <div className="flex items-center justify-evenly">
                    <div className="flex gap-4">
                        <HiOutlinePaperAirplane className="text-white"/>
                        <h2 className="text-white">4000@dinmaegler.com</h2>

                        <BsTelephone className="text-white"/>
                        <p className="text-white">+45 7070 4000</p>
                    </div>
                    <div className="flex">
                        <IoPerson className="text-white"/>
                        <h2 className="text-white">Log ind</h2>
                    </div>
                </div>
            </div>
            <Navigation/>
        </header>
    )
}