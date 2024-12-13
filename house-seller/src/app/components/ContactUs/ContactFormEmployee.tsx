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
    agentId: string;
}

export default function ContactFormEmployee({ agentId }: ContactFormEmployeeProps) {
    const [agentName, setAgentName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null)

    const [formData, setFormData] = useState({
        name: "",    
        email: "",   
        subject: "", 
        message: "", 
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        fetch("https://dinmaegler.onrender.com/agents", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data: Agent[]) => {
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

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: "", email: "", subject: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Navn er påkrævet.";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Ugyldig emailadresse.";
            valid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Emne er påkrævet.";
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Besked er påkrævet.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        if (validateForm()) {
            console.log("Formularen er gyldig, sender data:", formData);
    
            
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
    
            
            setSubmissionMessage("Din besked er nu sendt!");
            setTimeout(() => setSubmissionMessage(null), 5000);
        } else {
            console.log("Formularen er ugyldig, tjek fejl.");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    if (loading) {
        return <p>Indlæser...</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-[2em] w-full border border-[#D3DEE8] gap-8">
            <div className="flex flex-row gap-2">
                <h2 className="font-semibold text-xl border-b-4 border-black">Kontakt</h2>
                <h3 className="font-semibold text-xl">{agentName}</h3>
            </div>

            <div className="flex flex-row gap-4">
                <label className="flex flex-col gap-3">
                    Navn
                    <input
                        type="text"
                        name="name"
                        placeholder="Indtast navn"
                        value={formData.name || ''}
                        onChange={handleChange}
                        className="border border-[#D3DEE8] p-2"
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </label>

                <label className="flex flex-col gap-3 w-[12em]">
                    Email
                    <input
                        type="text"
                        name="email"
                        placeholder="Indtast email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        className="border border-[#D3DEE8] p-2"
                    />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                </label>
            </div>

            <label className="flex flex-col gap-3">
                Emne
                <input
                    type="text"
                    name="subject"
                    placeholder="Hvad drejer din henvendelse sig om?"
                    value={formData.subject || ''}
                    onChange={handleChange}
                    className="border border-[#D3DEE8] p-2 w-full"
                />
                {errors.subject && <span className="text-red-500">{errors.subject}</span>}
            </label>

            <label className="flex flex-col gap-3">
                Besked
                <textarea
                    name="message"
                    placeholder="Skriv din besked her..."
                    value={formData.message || ''}
                    onChange={handleChange}
                    className="border border-[#D3DEE8] w-full h-[14em] p-2"
                />
                {errors.message && <span className="text-red-500">{errors.message}</span>}
            </label>

            <button
                type="submit"
                className="px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center"
            >
                Send Besked
            </button>
        </form>
    );
}
