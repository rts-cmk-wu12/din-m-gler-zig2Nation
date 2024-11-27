import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-4xl w-full flex justify-between items-center h-[5em] mx-auto px-8">
                {/* Logo */}
                <Image
                    src="/maegler-logo.png"
                    alt="Din Mægler Logo"
                    width={150}
                    height={40}
                />
                {/* Links */}
                <ul className="flex gap-8 text-sm font-medium">
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/houses'>Boliger til salg</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                        <Link href='/agents'>Mæglere</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">Mine favoritter</li>
                    <li className="cursor-pointer hover:text-blue-500">Kontakt os</li>
                </ul>
            </div>
        </nav>
    );
}
