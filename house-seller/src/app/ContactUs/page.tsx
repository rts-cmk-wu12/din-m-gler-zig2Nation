import Image from "next/image"
import InfoTexst from "../components/ContactUsTexst/InfoTexst"
import SendMessege from "../components/ContactUsTexst/SendMessege"
import Call from "../components/ContactUsTexst/Call"
import SendEmail from "../components/ContactUsTexst/SendEmail"
import ShopLocation from "../components/ContactUsTexst/ShopLocation"
export default function ContactUs() {
    return(
        <>
            <div className="relative h-[10em]">
                {/* Baggrundsbillede med mørk overlay */}
                <Image
                  src="/Mask-Group.png"
                  alt="account login baggrundsbilled af et hus"
                  width={1700}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

                {/* Tekst, der vises oven på billedet */}
                <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                  <h2 className="text-5xl font-bold">Kontakt os</h2>
                </article>
            </div>
        <section className="flex flex-col items-center w-[100%]">

            <div className="flex flex-row items-center justify-center mt-40 w-[60em] gap-4">
                <div className="flex flex-col items-center justify-center gap-9">
                    <InfoTexst/>
                    <SendMessege/>
                </div>
                <section className="flex flex-col items-center border border-[#D3DEE8] h-full">
                    <Call/>
                    <SendEmail/>
                    <ShopLocation/>
                </section>
            </div>
        </section>
        </>
    )
}