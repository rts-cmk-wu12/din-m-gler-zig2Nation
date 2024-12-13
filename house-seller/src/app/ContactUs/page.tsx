import Image from "next/image"
import InfoTexst from "../components/Question.tsx/InfoTexst"
import SendMessege from "../components/Question.tsx/SendMessege"
import Call from "../components/Question.tsx/Call"
import SendEmail from "../components/Question.tsx/SendEmail"
import ShopLocation from "../components/Question.tsx/ShopLocation"
import Banner from "../components/Banner/Banner"
export default function ContactUs() {
    return(
        <>
            <Banner title="Kontakt os"/>
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