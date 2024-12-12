import Image from "next/image"
export default function CreateUser() {
    return(
        <div>
        <div className="relative w-full h-[10em]">
            {/* Baggrundsbillede med mørk overlay */}
            <Image
              src="/Mask-Group.png"
              alt="account login baggrundsbilled af et hus"
              width={1700}
              height={300}
              className="w-full h-full object-cover"
            />
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
       {/* Tekst, der vises oven på billedet */}
       <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
         <h2 className="text-2xl font-bold">Account Register</h2>
         <div className="flex flex-row justify-center gap-4 mt-2">
           <p>Home</p>
           <div className="w-[0.1em] h-[1em] bg-[white]"></div>
           <p className="text-[#162A41]">Login</p>
         </div>
       </article>
     </div>
        <div className="w-full flex items-center mb-20">
            <form action="" className="flex flex-col items-center mt-32 min-h-[70vh] border w-[40em] p-[4em] gap-4 ml-[28%] shadow-lg">
              <h2 className="font-semibold">Opret bruger hos Din Mægler</h2>
                <label htmlFor="" className='flex flex-col gap-2'>
                    Fulde navn
                    <input type="text" placeholder="Fulde navn" className=' border border-[#D3DEE8] w-[30em] p-2'/>
                </label>
                <label htmlFor="" className='flex flex-col gap-2'>
                    Email adresse
                    <input type="text" placeholder="Email adresse" className=' border border-[#D3DEE8] w-[30em] p-2'/>
                </label>
                <label htmlFor="" className='flex flex-col gap-2'>
                    Password
                    <input type="text" placeholder="Password" className=' border border-[#D3DEE8] w-[30em] p-2'/>
                </label>
                <label htmlFor="" className='flex flex-col gap-2'>
                    Bekræft password
                    <input type="text" placeholder="Bekræft password" className=' border border-[#D3DEE8] w-[30em] p-2'/>
                </label>
              <button
                 type="submit"
                 className="w-[30em] py-3 bg-[#162A41] text-white font-semibold"
               >
                 Opret bruger
              </button>
            </form>
            </div>
        </div>
    )
}