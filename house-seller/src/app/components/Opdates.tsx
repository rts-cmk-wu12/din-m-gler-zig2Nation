import Image from "next/image"
import { PiGooglePlayLogoFill } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
export default function Opdates(){
    return(
        <section className="w-full h-[30em] bg-[#162A41] mt-[10em] flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-between w-[60em] gap-9">
                <article className="w-[30em]">
                    <div className="w-[20em] mb-10">
                        <h2 className="text-white font-bold text-[2em]">Hold dig opdateret 
                        på salgsprocessen</h2>
                    </div>
                    <p className="text-white leading-loose">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                    <div className="flex flex-row mt-8 gap-5">
                        <button className="w-[10em] h-[3em] rounded bg-white flex items-center justify-center gap-4" aria-label="Google Play"><PiGooglePlayLogoFill/><span className="sr-only">gå til Google Play</span>Google Play</button>
                        <button className="w-[10em] h-[3em] text-white flex items-center justify-center gap-4 border border-white rounded" aria-label="Apple Store"><FaApple className="text-white"/><span className="sr-only">apple logo til og gå til apple store</span>Apple Store</button>
                    </div>

                </article>
                <Image src='/Groupphones.png' alt="to telefoner som viser at du kan holde dig opdateret" width={550} height={325} className="h-[28em] mt-[2em] w-[25em]"/>
            </div>
        </section>
    )
}