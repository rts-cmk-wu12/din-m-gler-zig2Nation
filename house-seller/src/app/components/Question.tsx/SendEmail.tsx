import Image from "next/image"
export default function SendEmail() {
    return(
        <div className="h-[8em] border-b-2 border-[#D3DEE8] w-[90%] flex items-center justify-center">
            <ul>
            <li className="flex flex-col items-start">
              <div className="flex flex-col items-center gap-2">
                <Image src="/paiperplane.svg" alt="papirsfly til og send en mail" width={40} height={40} />
                <div className="flex flex-col justify-start gap-3">
                  <p className="text-center font-semibold text-[1em]">Send en mail</p>
                  <span className="text-gray-800">4000@dinmaegler.com</span>
                </div>
              </div>
            </li>
            </ul>
        </div>
    )
}