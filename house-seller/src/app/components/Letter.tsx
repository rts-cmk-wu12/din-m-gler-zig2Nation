import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Letter() {
    return (
        <section className="w-full h-[10em] mt-[10em]">

            <article className="w-full h-full relative ">

                <Image
                    src="/mask-group (2).png"
                    alt="Baggrundsbillede til nyhedsbrev af et lejlighedskompleks"
                    layout="fill"
                    className="object-cover"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#162A41] bg-opacity-70 text-white py-4 px-8 rounded shadow-lg w-full h-full flex flex-row items-center justify-center gap-8">
                    <h2 className="text-xl font-bold w-[17.3em]">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
                    <form action="">
                        <label htmlFor="Email">
                            <div className="w-[35em] h-[3em] bg-white flex flex-row items-center justify-start p-3 rounded">
                                <input type="text"
                                className="w-full text-black"
                                placeholder="Indtast din email adresse"/>
                                <FaArrowRightLong className="w-10 h-6 text-black"/>
                            </div>
                        </label>
                    </form>
                </div>
            </article>
        </section>
    );
}
