import Image from "next/image"
export default function ShopLocation() {
    return(
        <div className="h-[10em] border-b-2 border-[#D3DEE8] w-[90%] flex items-center justify-center">
            <ul>
                <li className="flex flex-col items-start">
                  <div className="flex flex-col items-center gap-2">
                    <Image src="/locationdot.svg" alt="locations prik" width={40} height={40} />
                    <div className="flex flex-col justify-start">
                      <p className="text-center text-[1em] font-semibold">Butik</p>
                      <span className="text-gray-800 text-center">Stændertorvet 78, 4000 Roskilde</span>
                    </div>
                  </div>
                </li>
            </ul>
        </div>
    )
}