import Image from "next/image";
import ContactForm from "./ContactForm";
import QuikLinks from "./QuikLinks";
import Dms from "./Dms";
import LayoutBy from "./LayoutBy";

export default function Footer() {
    return (
        <footer className="gap-4 min-h-[50vh] grid grid-cols-[auto,35em,35em,auto] grid-rows-3 bg-gray-100 relative">
          <section className="col-start-2 col-end-4 mt-11 ml-24">
            <Image src='/maegler-logo.png' alt="firmaets logo din mægler" width={200} height={200}/>
            <p className="w-[40em] mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
          </section>
          <section className="col-start-3 col-end-4 ml-24">
            <QuikLinks/>
          </section>
          <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-5 ">
            <div className="col-start-2 ml-24">
              <Dms/>
            </div>
          </section>
          <section className="mr-4 mb-4 bg-white row-start-2 row-end-4 col-start-2 col-end-3 shadow-lg w-[25em] h-[25em] ml-24">
            <ContactForm/>
          </section>
          <section className="absolute bottom-[-8em] w-full">
            <LayoutBy/>
          </section>
        </footer>
    );
}
