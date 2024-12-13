import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="w-[60em] flex justify-between items-center h-[5em] mx-auto">
                <Link href={'/'}>
                <Image
                    src="/maegler-logo.png"
                    alt="Din Mægler Logo"
                    width={150}
                    height={40}
                />
                </Link>
                <ul className="flex gap-8 text-sm font-medium">
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/houses'>Boliger til salg</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/agents'>Mæglere</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/MineFavorites'>Mine favoritter</Link>
                    </li>
                    
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/ContactUs'>Kontakt os</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}
