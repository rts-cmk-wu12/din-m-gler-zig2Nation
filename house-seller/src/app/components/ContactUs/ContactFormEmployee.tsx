'use client';
import { useState, useEffect } from "react";

interface Agent {
    id: string;
    name: string;
    title: string;
    phone: string;
    email: string;
    description: string;
    image: { url: string };
}

interface ContactFormEmployeeProps {
    agentId: string; // Agentens id for at finde den korrekte agent
}

export default function ContactFormEmployee({ agentId }: ContactFormEmployeeProps) {
    const [agentName, setAgentName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dinmaegler.onrender.com/agents", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data: Agent[]) => {
                // Find agenten med det givne id
                const agent = data.find((agent) => agent.id === agentId);
                if (agent) {
                    setAgentName(agent.name);
                } else {
                    setAgentName("Ingen navn på denne sælger");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fejl ved hentning af agenter:", err);
                setAgentName("Fejl ved indlæsning");
                setLoading(false);
            });
    }, [agentId]);

    if (loading) {
        return <p>Indlæser...</p>;
    }

    return (
        <form className="flex flex-col p-[2em] w-full border border-[#D3DEE8] gap-8">
            <div className="flex flex-row gap-2">
                <h2 className="font-semibold text-xl border-b-4 border-black">Kontakt</h2>
                {/* Vis agentens navn her */}
                <h3 className="font-semibold text-xl">{agentName}</h3>
            </div>
            <div className="flex flex-row gap-4">
                <label htmlFor="" className="flex flex-col gap-3">
                    Navn
                    <input type="text" placeholder="indtast navn" className="border border-[#D3DEE8] p-2" />
                </label>

                <label htmlFor="" className="flex flex-col gap-3 w-[12em]">
                    Email
                    <input type="text" placeholder="Indtast email" className="border border-[#D3DEE8] p-2" />
                </label>
            </div>
            <label htmlFor="">
                Emne
                <input
                    type="text"
                    placeholder="Hvad drejer din henvendelse sig om?"
                    className="border border-[#D3DEE8] p-2 w-full"
                />
            </label>
            <label htmlFor="">
                Besked
                <textarea
                    placeholder="Skriv din besked her..."
                    className="border border-[#D3DEE8] w-full h-[14em] p-2"
                />
            </label>
            <button className="px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center">
                Send Besked
            </button>
        </form>
    );
}
