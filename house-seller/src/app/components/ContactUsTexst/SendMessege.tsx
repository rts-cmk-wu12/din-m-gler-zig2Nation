export default function SendMessege() {
    return(
        <form action="" className="flex flex-col p-[2em] w-full border border-[#D3DEE8] gap-8">
            <div className="flex flex-row gap-4 w-full">
                <label htmlFor="" className="flex flex-col gap-3 w-full">
                    Navn
                    <input type="text" placeholder="indtast navn" className="border border-[#D3DEE8] p-2 "/>
                </label>

                <label htmlFor="" className="flex flex-col gap-3 w-full">
                    Email 
                    <input type="text" placeholder="Indtast email" className="border border-[#D3DEE8] p-2"/>
                </label>
            </div>
            <label htmlFor="" >
                Emne
                <input type="text" placeholder="Hvad drejer din henvendelse sig om?" className="border border-[#D3DEE8] p-2 w-full"/>
            </label>
            <label htmlFor="">
                Besked
                <input type="text" placeholder="Skriv din besked her..." className="border border-[#D3DEE8] w-full h-[14em] p-2"/>
            </label>
            <label htmlFor="" className="flex flex-row gap-2">
                <input type="Checkbox"  className="text-[#D3DEE8] w-5"/>
                <p>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</p>
            </label>
            <button className=" px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center">Send Besked</button>
        </form>
    )
}