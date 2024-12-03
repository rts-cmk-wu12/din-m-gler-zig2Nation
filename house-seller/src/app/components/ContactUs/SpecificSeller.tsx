'use client'
import { Agent } from "@/app/HouseTypes";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import Image from "next/image";
  export default function SpecificSeller() {
    const [agent, setAgent] = useState<Agent | null>(null);
    const [loading, setLoading] = useState(true); // State til at indikere loading
    useEffect(() => {
      fetch("https://dinmaegler.onrender.com/agents/6163fc0e2d07e63c24647d0c", {
        method: "GET",
      })
        .then((response) => response.json()) // Husk at parse JSON, hvis det er et JSON-response
        .then((data) => {
          console.log("Fetched agent data:", data)
          const agentData: Agent = {
            
            name: data.name,
            title: data.title,
            phone: data.phone,
            email: data.email,
            description: data.description,
            image: { url: data.image.url },
          }
          setAgent(agentData)
          setLoading(false)
        })
        .catch((err) => console.error("Error fetching agent:", err));
    }, []); // Tom array sikrer, at denne effekt kun kører én gang, når komponenten mountes
    if(loading) {
      return <p>Loading...</p>
    }
    if(!agent) {
      return <p>ingen sælger</p>
    }
    return (
      <>
      <section className=" flex flex-row justify-between gap-14">
        <article>
          <div className="flex flex-row justify-center gap-4 w-[30em] h-[19em] mt-10">
            {agent.image.url ? (
              <div>
                <Image
                  src={agent.image.url}
                  alt={`Billede af ${agent.name}`}
                  width={300}
                  height={300}
                  className="h-[15em]"
                />
              </div>
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
            <p className="font-semibold  border-b-4 border-black">Om</p>
            <p className="font-semibold">Peter Sørensen</p>
          </div>
          <p className="mt-[1em] mb-8">{agent.description}</p>
        </article>
      </section>
      </>
    );
  }