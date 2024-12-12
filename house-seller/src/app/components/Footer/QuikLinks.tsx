import Link from "next/link"
export default function QuikLinks() {
    return(
        <article>
            <h2 className="text-[#2A2C30] font-bold text-[1.6em]">Quik Links</h2>
            <ul>
                <li className="hover:underline underline-offset-4">
                    <Link href='/houses'>Boliger til salg</Link>
                </li>
                <li className="hover:underline underline-offset-4">
                    <Link href='/agents'>Mæglere</Link>
                </li>
                <li className="hover:underline underline-offset-4">
                    <Link href='/ContactUs'>Kontakt os</Link>
                </li>
                <li className="hover:underline underline-offset-4">
                    <Link href='/Login'>Log ind / bliv bruger</Link>
                </li>
            </ul>
        </article>
    )

}