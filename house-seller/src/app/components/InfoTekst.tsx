import Image from "next/image"

export default function InfoTekst() {
    return (
        <section className="flex flex-col items-center justify-center w-full px-8 mt-[6em]">
            {/* Første linje */}
            <div className="flex flex-row gap-8 max-w-3xl w-full justify-center">
                <div className="flex flex-row items-start gap-4">
                    <div className="w-[5em] h-[2em] bg-[#EEF7FF] flex items-center justify-center">
                        <Image src="/property.svg" alt="en svg af en ejendom"  className="max-w-[1em]" width={25} height={25} />
                    </div>
                    <article>
                        <h3 className="font-bold text-lg">Bestil et salgstjek</h3>
                        <p className="text-gray-600">
                            Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.
                        </p>
                    </article>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="w-[5em] h-[2em] bg-[#EEF7FF] flex items-center justify-center">
                        <Image src="/maps-and-flags.svg" alt="en placerings flag" className="max-w-[1em]" width={25} height={25} />
                    </div>
                    <article>
                        <h3 className="font-bold text-lg">74 butikker</h3>
                        <p className="text-gray-600">
                            Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.
                        </p>
                    </article>
                </div>
                <div className="flex flex-row items-start gap-4">
                    <div className="w-[5em] h-[2em] bg-[#EEF7FF] flex items-center justify-center">
                    <Image src="/customer.svg" alt="en bruger figur"  className="max-w-[1em]" width={25} height={25} />
                    </div>
                    <article>
                        <h3 className="font-bold text-lg">Tilmeld køberkartotek</h3>
                        <p className="text-gray-600">
                            Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
