import Image from 'next/image'; // Importer Next.js Image-komponent
import { Agent } from "@/app/HouseTypes"; // Importer Agent-typen
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

interface DescriptionProps {
  description: string;
  agent: Agent;
}

export default function Description({ description, agent }: DescriptionProps) {
  return (
    <section className="mt-32 flex flex-row justify-between gap-14">
      <article className="w-[50%]">
        <h2 className="font-bold text-xl">Beskrivelse</h2>
        <p className='mt-10'>{description}</p>
      </article>
      <article>
        <h3 className="font-bold text-xl">Ansvarlig mægler</h3>
        <div className='flex flex-row justify-center gap-4 border border-[#D3DEE8] w-[30em] h-[19em] p-7 mt-10'>
          {agent.image ? (
            <div>
                <Image
                  src={agent.image.url}
                  alt={`Billede af ${agent.name}`}
                  width={500} // Angiv passende bredde
                  height={500} // Angiv passende højde
                  className='h-[15em]'
                />
            </div>
          ) : (
            <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center rounded-full">
              <p className="text-gray-500">Ingen billede</p>
            </div>
          )}
          <div className='flex flex-col gap-2'>
            <p className="font-bold mt-2">{agent.name}</p>
            <p className='text-[#7B7B7B]'>{agent.title}</p>
            <div className='w-9 h-[0.2em] bg-[#D3DEE8]'></div>
            <div className='flex flex-row items-center gap-2'>
                <FaPhoneAlt />
                <p>{agent.phone}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <FaPaperPlane />
                <p>{agent.email}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
