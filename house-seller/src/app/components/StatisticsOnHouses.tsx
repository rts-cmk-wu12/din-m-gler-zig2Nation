import Image from "next/image"
export default function StatisticsOnHouses() {
    return(
        <>
        <section className="flex flex-row gap-3 items-center justify-between mb-[5em]">
            <div className="flex flex-row">
                <div className="w-[3em] h-[3em] bg-[#EEF7FF] flex items-center justify-center">
                    <Image src='/huse-der-holdes.svg' alt="et lille hus holdt af en hånd" width={30} height={30}/>
                </div>
                <article className="flex flex-col">
                    <p className="font-bold">4829</p>
                    <p>boliger solgt</p>
                </article>
            </div>
            <div className="flex flex-row gap-3 ">
                <div className="w-[3em] h-[3em] bg-[#EEF7FF] flex items-center justify-center">
                    <Image src='/home-1.svg' alt="et lille hus" width={30} height={30}/>
                </div>
                <article>
                    <p className="font-bold">158</p>
                    <p>boliger til salg</p>
                </article>
            </div>
        </section>
        </>
    )
}