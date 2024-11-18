import Image from "next/image"
export default function Navigation() {
    return(
        <>
        <section className="w-full flex flex-row items-center justify-evenly h-[5em]">
            <Image 
                src="/maegler-logo.png"
                alt="logo"
                width={200}
                height={200}/>

            <ul className=" flex flex-row items-center justify-evenly gap-4">
                <li className="cursor-pointer">Boliger til salg</li>
                <li className="cursor-pointer">Mæglere</li>
                <li className="cursor-pointer">Mine favoritter</li>
                <li className="cursor-pointer">Kontakt os</li>
            </ul>
        </section>
        </>
    )
}