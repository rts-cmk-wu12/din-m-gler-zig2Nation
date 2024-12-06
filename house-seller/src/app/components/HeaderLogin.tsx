'use client'
import Link from "next/link";
interface HeaderLoginProps{
    isLoggedIn: boolean
}
export default function HeaderLogin({ isLoggedIn }: HeaderLoginProps) {
    const handleLogout = () => {
        document.cookie =
        "dm_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"

        document.cookie =
        "dm_userid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.reload();

    }
        return(
            <div className="flex items-center gap-2">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="cursor-pointer">
                        Log ud
                    </button>
                ): (
                    <Link href={'/Login'}>
                    <span>Log ind</span>
                    </Link>
                )}
            </div>
    )
}