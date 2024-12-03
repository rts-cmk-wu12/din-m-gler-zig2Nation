'use client';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import test from './test'; // Sørg for at importere korrekt

export default function LoginTest() {
  const [formState, setFormState] = useState<{ success?: boolean } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const result = await test(null, formData);
      setFormState(result);

      if (result.success) {
        redirect('/houses'); 
      } else {
        alert('Fejl! Tjek dine loginoplysninger.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Noget gik galt. Prøv igen senere.');
    }
  };

  return (
        <>
        <div className="relative">
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
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-32 min-h-[70vh] border border-indigo-600 w-[30em]">
      <label htmlFor="identifier" className='flex flex-col'>Email
        <input type="email" name="identifier" className=' border border-indigo-600 w-[20em]' required />
      </label>
      <span>{formState?.success?.toString()}</span>
      <label htmlFor="password" className='flex flex-col'>Adgangskode
        <input type="password" name="password" className=' border border-indigo-600 w-[20em]' required />
      </label>
      <button type="submit">Login</button>
    </form>
    </>
    )
}
