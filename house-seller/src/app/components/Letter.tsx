import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

export default function Letter() {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simpel regex e-mail-validering
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Indtast en gyldig e-mail-adresse.");
            return;
        }

        try {
            const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage("Du er nu tilmeldt nyhedsbrevet!");
                setEmail(""); // Ryd inputfeltet
            } else {
                setMessage("Noget gik galt. Prøv igen.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Der opstod en fejl. Prøv igen senere.");
        }
    };

    return (
        <section className="w-full h-[10em] mt-[10em]">
            <article className="w-full h-full relative">
                <Image
                    src="/mask-group (2).png"
                    alt="Baggrundsbillede til nyhedsbrev af et lejlighedskompleks"
                    layout="fill"
                    className="object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#162A41] bg-opacity-70 text-white py-4 px-8 rounded shadow-lg w-full h-full flex flex-row items-center justify-center gap-8">
                    <h2 className="text-xl font-bold w-[17.3em]">
                        Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Email">
                            <div className="w-[35em] h-[3em] bg-white flex flex-row items-center justify-start p-3 rounded">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full text-black"
                                    placeholder="Indtast din email adresse"
                                />
                                <button type="submit" className="w-10 h-6 text-black">
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </label>
                        {message && (
                            <p className="text-white mt-2">{message}</p>
                        )}
                    </form>
                </div>
            </article>
        </section>
    );
}
