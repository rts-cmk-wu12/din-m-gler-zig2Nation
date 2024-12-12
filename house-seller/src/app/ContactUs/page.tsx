import Image from "next/image"
import InfoTexst from "../components/Question.tsx/InfoTexst"
import SendMessege from "../components/Question.tsx/SendMessege"
import Call from "../components/Question.tsx/Call"
import SendEmail from "../components/Question.tsx/SendEmail"
import ShopLocation from "../components/Question.tsx/ShopLocation"
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
                <div className="flex flex-col items-center justify-center mt-40 w-full gap-4">
                    <div className="flex flex-col items-center justify-center gap-9 w-[60em]">
                        <InfoTexst/>
                    </div>
                    <section className="flex flex-row items-start h-full gap-7 w-[60em]"> {/* gap-4 tilføjer mellemrum mellem elementerne */}
                        <SendMessege />
                        <div className="flex flex-col items-center w-[30em] h-[43em] gap-16 border border-[#D3DEE8] p-7">
                            <Call/>
                            <SendEmail/>
                            <ShopLocation/>
                        </div>
                    </section>
                    <div className="w-full mt-24">
                        <Image src='/Map.png'
                        alt="et map billede af vores placering"
                        height={500}
                        width={500}
                        className="w-full object-fill"/>
                    </div>
                </div>
            </section>

        </>
    )
}