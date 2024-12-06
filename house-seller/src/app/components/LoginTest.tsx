'use client';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import test from './test'; // Sørg for at importere korrekt
import Link from 'next/link';



  return (
        <>
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
         <h2 className="text-2xl font-bold">Account Login</h2>
         <div className="flex flex-row justify-center gap-4 mt-2">
           <p>Home</p>
           <div className="w-[0.1em] h-[1em] bg-[white]"></div>
           <p className="text-[#162A41]">Login</p>
         </div>
       </article>
     </div>
     <div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-32 min-h-[70vh] border w-[40em] p-[4em] gap-4">
          <label htmlFor="identifier" className='flex flex-col gap-2'>Email
            <input type="email" name="identifier" placeholder='Email' className=' border border-[#D3DEE8] w-[30em] p-2' required />
          </label>
          <span>{formState?.success?.toString()}</span>
          <label htmlFor="password" className='flex flex-col gap-2'>Adgangskode
            <input type="password" name="password" placeholder='Password' className=' border border-[#D3DEE8] w-[30em] p-2' required />
          </label>

            <button
                 type="submit"
                 className="w-[30em] py-3 bg-[#162A41] text-white font-semibold hover:bg-blue-800"
               >
                 Log ind
            </button>
               <article className='w-[30em]'>
               <p>Log in med</p>
               <div className="mt-3 flex flex-row items-center justify-between w-full">
                   <button className="w-[8em] h-11 bg-[#DD4B39] text-white">Google</button>
                   <button className="w-[8em] h-11 bg-[#3B5999] text-white">Facebook</button>
                   <button className="w-[8em] h-11 bg-[#162A41] text-white">Twitter</button>
               </div>
           </article>
           
           <p className="text-center mt-6">Har du ikke en bruger?</p>
           <Link href={'/CreateAccount'}>
            <button className="text-[#2F80ED]">Opret bruger</button>
            </Link>
        </form>
    </div>
    </>
    )

