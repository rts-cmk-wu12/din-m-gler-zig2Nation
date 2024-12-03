import Contact from "../components/ContactUs/Contact"
import ContactFormEmployee from "../components/ContactUs/ContactFormEmployee"
import SpecificSeller from "../components/ContactUs/SpecificSeller"
import SearchProperty from "../components/ContactUs/SearchProperty"
export default function ContactAnEmployee() {
    
    
    return(
        <>
        <section className="flex flex-col w-[100%]">
                <Contact/>
            <div className="flex flex-col items-center mt-40">
                <div className="flex flex-row items-center justify-center gap-9">
                    <div className="w-[35em] border border-[#D3DEE8] p-9">
                        <SpecificSeller/>
                        <ContactFormEmployee/>
                    </div>
                    <SearchProperty/>
                </div>
            </div>
        </section>
      </>
    )
}