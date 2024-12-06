import { cookies } from "next/headers";
import Navigation from "./Navigation";
import HeaderLogin from "./HeaderLogin";

export default async function Header() {
    //henter et objekt af coockies
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("dm_token"); // Henter cookie

    const token = tokenCookie?.value ?? null; // Hvis cookie ikke findes, sæt `null`

    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-[#162A41] h-[3em] flex items-center justify-center">
                <div className="max-w-4xl w-full flex justify-between px-8 text-white text-sm">
                    <div className="flex items-center gap-4">
                        <span>4000@dinmaegler.com</span>
                        <span>+45 7070 4000</span>
                    </div>
                    {/* Passér login-status som en boolean til HeaderLogin */}
                    <HeaderLogin isLoggedIn={!!token} />
                </div>
            </div>
            <Navigation />
        </header>
    );
}
