'use client';
import { useState, FormEvent } from "react";

export default function SendMessege() {
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

    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

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

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    
        if (validateForm()) {
            console.log("Formularen er gyldig, sender data:", formData);
    
            // Tøm formularen
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
    
            // Vis en succesbesked
            setSubmissionMessage("Din besked er nu sendt!");
            setTimeout(() => setSubmissionMessage(null), 5000); // Fjern beskeden efter 5 sekunder
        } else {
            console.log("Formularen er ugyldig, tjek fejl.");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-[2em] w-full border border-[#D3DEE8] gap-8">
            <div className="flex flex-row gap-4">
                <label className="flex flex-col gap-3">
                    Navn
                    <input
                        type="text"
                        name="name"
                        placeholder="Indtast navn"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-[#D3DEE8] p-2"
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </label>

                <label className="flex flex-col gap-3 w-[12em]">
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Indtast email"
                        value={formData.email}
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
                    value={formData.subject}
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
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-[#D3DEE8] w-full h-[14em] p-2"
                />
                {errors.message && <span className="text-red-500">{errors.message}</span>}
            </label>
            <label htmlFor="" className="flex flex-row gap-2">
                <input type="Checkbox" className="text-[#D3DEE8] w-5" />
                <p>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</p>
            </label>

            <button
                type="submit"
                className="px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center"
            >
                Send Besked
            </button>

            {submissionMessage && <p className="text-green-500">{submissionMessage}</p>}
        </form>
    );
}
