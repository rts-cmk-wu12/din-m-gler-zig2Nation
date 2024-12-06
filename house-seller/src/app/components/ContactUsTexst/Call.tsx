import Image from "next/image"
import FastLinks from "../FastLinks"
export default function Call() {
    return(
        <div className="h-[8em] border-b-2 border-[#D3DEE8] w-[90%] flex items-center justify-center">
          <ul>
            <li className="flex flex-col items-start">
              <div className="flex flex-col items-center gap-3">
                <Image src="/telefone.svg" alt="kontakt telefon" width={40} height={40} />
                <div className="flex flex-col justify-start gap-3">
                  <p className="text-center font-semibold text-[1em]">Ring til os</p>
                  <span className="text-gray-800">+45 7070 4000</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
    )
}