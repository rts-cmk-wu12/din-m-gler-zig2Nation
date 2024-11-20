import Image from "next/image";
import FastLinks from "./FastLinks";

export default function ContactForm() {
  return (
    <section className="flex flex-row gap-[10em] mt-[5em]">
      <div className="w-[23em] h-[20em] bg-white flex items-center justify-center flex-col">
        <ul className="flex flex-col justify-start items-start gap-4">
          <li className="flex flex-col items-start">
            <div className="flex flex-row items-center gap-2">
              <Image src="/telefone.svg" alt="kontakt telefon" width={40} height={40} />
              <div className="flex flex-col justify-start">
                <p className="text-start text-[#7B7B7B] text-[0.7em]">Ring til os</p>
                <span className="text-gray-800">+45 7070 4000</span>
              </div>
            </div>
          </li>
          <li className="flex flex-col items-start">
            <div className="flex flex-row items-center gap-2">
              <Image src="/paiperplane.svg" alt="papirsfly til og send en mail" width={40} height={40} />
              <div className="flex flex-col justify-start">
                <p className="text-start text-[#7B7B7B] text-[0.7em]">Send en mail</p>
                <span className="text-gray-800">4000@dinmaegler.com</span>
              </div>
            </div>
          </li>
          <li className="flex flex-col items-start">
            <div className="flex flex-row items-center gap-2">
              <Image src="/locationdot.svg" alt="locations prik" width={40} height={40} />
              <div className="flex flex-col justify-start">
                <p className="text-start text-[#7B7B7B] text-[0.7em]">Butik</p>
                <span className="text-gray-800">Stændertorvet 78, 4000 Roskilde</span>
              </div>
            </div>
          </li>
        </ul>
        <p className="mt-6 text-start text-gray-600 w-[15em] mr-[2em]">
          Din Mægler Roskilde, er din boligbutik i lokalområdet.
        </p>
      </div>
      <FastLinks />
    </section>
  );
}


//src="/paiperplane.svg" alt="papirsfly til og send en mail"
// src="/locationdot.svg" alt="locations prik"