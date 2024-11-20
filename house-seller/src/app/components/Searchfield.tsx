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
                    <h1 className="text-2xl font-bold mb-4 text-white">Søg efter din drømmebolig</h1>
                    <article className="w-[40em] h-[10em] flex flex-col items-start bg-white p-[2em]">
                        <h2 className="text-lg font-medium mb-4">Søg blandt 158 boliger til salg i 74 butikker</h2>
                        <form action="" className="flex flex-col gap-2 w-full">
                        <h2 className="text-start">Hvad skal din næste bolig indeholde</h2>
                            <label htmlFor="søgefelt" className=" flex flex-row itmes-center justify-center gap-4 ">
                                <input 
                                    type="text" 
                                    id="søgefelt" 
                                    placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                    <button className="bg-[#162A41] text-white w-[20%] h-[100%]">Søg</button>
                            </label>
                        </form>
                    </article>
                </div>
            </section>
        </>
    )
}
