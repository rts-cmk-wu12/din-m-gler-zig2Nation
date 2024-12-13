'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Brug useParams til at hente ruteparametre
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

interface Agent {
  name: string;
  title: string;
  phone: string;
  email: string;
  description: string;
  image: { url: string };
}

export default function SpecificSeller() {
  const params = useParams();
  const { id } = params as { id: string }; 
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dinmaegler.onrender.com/agents/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const agentData: Agent = {
          name: data.name,
          title: data.title,
          phone: data.phone,
          email: data.email,
          description: data.description,
          image: { url: data.image.url },
        };
        setAgent(agentData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching agent:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!agent) {
    return <p>Ingen sælger fundet.</p>;
  }

  return (
    <section className="flex flex-row justify-between gap-14">
      <article>
        <div className="flex flex-row justify-center gap-4 w-[30em] h-[19em] mt-10">
          {agent.image.url ? (
            <Image
              src={agent.image.url}
              alt={`Billede af ${agent.name}`}
              width={300}
              height={300}
              className="h-[15em]"
            />
          ) : (
            <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center rounded-full">
              <p className="text-gray-500">Ingen billede</p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="font-bold mt-2">{agent.name}</p>
            <p className="text-[#7B7B7B]">{agent.title}</p>
            <div className="w-9 h-[0.2em] bg-[#D3DEE8]"></div>
            <div className="flex flex-row items-center gap-2">
              <FaPhoneAlt />
              <p>{agent.phone}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaPaperPlane />
              <p>{agent.email}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <p className="font-semibold border-b-4 border-black">Om</p>
          <h3 className="font-semibold">{agent.name}</h3>
        </div>
        <p className="mt-[1em] mb-8">{agent.description}</p>
      </article>
    </section>
  );
}
