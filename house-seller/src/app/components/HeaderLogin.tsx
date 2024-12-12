'use client'
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";

interface HeaderLoginProps {
    isLoggedIn: boolean;
}

export default function HeaderLogin({ isLoggedIn }: HeaderLoginProps) {
    const handleLogout = () => {
        // Slet cookies ved logout
        document.cookie =
        "dm_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        document.cookie =
        "dm_userid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        
        // Reload siden for at opdatere login-status
        window.location.reload(); // Opdaterer komponenten med nye cookies
    }

    return (
        <div className="flex items-center gap-2">
            {isLoggedIn ? (
                <button onClick={handleLogout} className="cursor-pointer flex felx-row items-center gap-2">
                    <IoPersonSharp />
                    Log ud
                </button>
            ) : (
                <Link href={'/Login'} className="flex flex-row items-center gap-2">
                    <IoPersonSharp />
                    <span>Log ind</span>
                </Link>
            )}
        </div>
    );
}
