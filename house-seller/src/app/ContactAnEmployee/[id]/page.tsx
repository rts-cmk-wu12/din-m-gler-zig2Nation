'use client'
import { useParams } from "next/navigation";
import Contact from "../../components/ContactUs/Contact";
import ContactFormEmployee from "@/app/components/ContactUs/ContactFormEmployee";
import SpecificSeller from "../../components/ContactUs/SpecificSeller";
import SearchProperty from "../../components/ContactUs/SearchProperty";

export default function ContactAnEmployee() {
    const { id } = useParams(); // Hent agentId fra URL'en

    // Sikr, at id er en string
    const agentId = Array.isArray(id) ? id[0] : id || "";

    return (
        <section className="flex flex-col w-[100%]">
            <Contact />
            <div className="flex flex-col items-center mt-40">
                <div className="flex flex-row items-center justify-center gap-9">
                    <div className="w-[35em] border border-[#D3DEE8] p-9">
                        <SpecificSeller />
                        {/* Send agentId som en prop */}
                        <ContactFormEmployee agentId={agentId} />
                    </div>
                    <SearchProperty />
                </div>
            </div>
        </section>
    );
}
