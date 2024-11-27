import { PiImageSquareThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { PiMapPinThin } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

export default function SvgBox() {
    return(
        <div className="flex flex-row gap-5">
            <PiImageSquareThin className="h-8 w-8 text-[#7B7B7B]"/>
            <IoLayersOutline className="h-8 w-8 text-[#7B7B7B]"/>
            <PiMapPinThin className="h-8 w-8 text-[#7B7B7B]"/>
            <BsHeart className="h-8 w-8 text-[#7B7B7B]"/>
        </div>
    )
}