import Image from "next/image"
import StatisticsOnHouses from "./StatisticsOnHouses"
import InfoTekst from "./InfoTekst"

export default function DanskernesHjem() {
    return (
        <>
            <section className="flex flex-col items-center w-full h-screen mt-[5em] bg-[white]">
                {/* Øverste indhold */}
                <div className="flex flex-row items-center justify-between max-w-5xl w-full px-8 border-b border-gray-300 mx-auto gap-[3em]" style={{ maxWidth: "50%" }}>
                    <Image 
                        width={300}
                        height={300}
                        src="/danskernes-hjem.png" 
                        alt="en familie til teksten, Vi har fulgt danskerne hjem i snart 4 årtier"
                    />

                    <article className="flex flex-col gap-6 max-w-lg">
                        <h3 className="font-bold text-3xl text-gray-800">
                            Vi har fulgt danskerne hjem <br /> i snart 4 årtier
                        </h3>
                        <div className="text-gray-700">
                            <h5 className="text-lg mb-2 font-bold">
                                Det synes vi siger noget om os!
                            </h5>
                            <p className="mb-2">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <StatisticsOnHouses />
                    </article>
                </div>

                {/* InfoTekst sektion */}
                <InfoTekst />
            </section>
        </>
    );
}