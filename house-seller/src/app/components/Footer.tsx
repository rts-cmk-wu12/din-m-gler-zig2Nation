import Image from "next/image"
import ContactForm from "./ContactForm"
import Dms from "./Dms"
import LayoutBy from "./LayoutBy"

export default function Footer() {
    return(
        <footer className="flex flex-col items-center justify-center mt-[7em]">
            <section className="bg-[#F8F8FB] w-[100%] flex items-center justify-center flex-col">
                <article className="mt-11 w-[60em]">
                    <Image src='/maegler-logo.png' alt="firmaets logo" width={200} height={200}/>
                    <p className="w-[40em] mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                </article>
                <ContactForm/>
            </section>
            <Dms/>
            <LayoutBy/>
        </footer>
    )
}