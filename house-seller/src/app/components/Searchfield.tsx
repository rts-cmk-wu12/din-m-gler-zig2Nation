import Image from "next/image"

export default function Søgefelt() {
    return (
        <>
            <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
                <Image 
                    src="/hus-baggrund.jpg"
                    alt="baggrund på søgefelt af et hus"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="relative z-10 bg-opacity-80 p-8 shadow-lg flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">Søg efter din drømmebolig</h1>
                    <div className="w-[50em] h-[10em]">
                        <article className=" flex flex-col items-start bg-white p-[2em]">
                            <div className="flex flex-row items-center justify-center mb-4 gap-2">
                                <p className="text-lg font-bold border-b-4 border-black">Søg</p>
                                <h2 className="text-lg font-bold"> blandt 158 boliger til salg i 74 butikker</h2>
                            </div>
                            <form action="" className="flex flex-col gap-2 w-full">
                            <h2 className="text-start">Hvad skal din næste bolig indeholde</h2>
                                <label htmlFor="søgefelt" className=" flex flex-row itmes-center justify-center gap-4 ">
                                    <input 
                                        type="text" 
                                        id="søgefelt" 
                                        placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                                        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                        <button className="bg-[#162A41] text-white w-[20%]">Søg</button>
                                </label>
                            </form>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
