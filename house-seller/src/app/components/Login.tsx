//import { useState } from "react";
//import Image from "next/image";
//
//interface LoginProps {
//  onLogin: () => void;
//}
//
//export default function Login({ onLogin }: LoginProps) {
//  const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");
//
//  // Håndterer indtastning af email og adgangskode
//  const handleSubmit = (e: React.FormEvent) => {
//    e.preventDefault();
//    
//    // Her kan du tilføje login-validering
//    if (email === "test@example.com" && password === "password123") {
//      onLogin();  // Kald onLogin, når login er succesfuldt
//    } else {
//      alert("Forkert email eller adgangskode");
//    }
//  };
//
//  return (
//    <>
//      <div className="relative">
//        {/* Baggrundsbillede med mørk overlay */}
//        <Image
//          src="/Mask-Group.png"
//          alt="account login baggrundsbilled af et hus"
//          width={1700}
//          height={300}
//          className="w-full h-full object-cover"
//        />
//        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
//
//        {/* Tekst, der vises oven på billedet */}
//        <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
//          <h2 className="text-2xl font-bold">Account Login</h2>
//          <div className="flex flex-row justify-center gap-4 mt-2">
//            <p>Home</p>
//            <div className="w-[0.1em] h-[1em] bg-[white]"></div>
//            <p className="text-[#162A41]">Login</p>
//          </div>
//        </article>
//      </div>
//
//      {/* Login-formular */}
//      <div className="flex justify-center items-center mt-10 min-h-[70vh]">
//        <section className="bg-[#f8f8fb] p-10 rounded-xl shadow-lg w-full max-w-lg min-h-[500px] flex flex-col justify-center">
//          <form onSubmit={handleSubmit} className="space-y-6">
//            <h2 className="text-center text-2xl font-bold">Login på din konto</h2>
//            <div>
//              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//              <input
//                type="email"
//                id="email"
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//                className="w-full p-3 border border-gray-300 rounded"
//                required
//              />
//            </div>
//            <div>
//              <label htmlFor="password" className="block text-sm font-medium mb-1">Adgangskode</label>
//              <input
//                type="password"
//                id="password"
//                value={password}
//                onChange={(e) => setPassword(e.target.value)}
//                className="w-full p-3 border border-gray-300 rounded"
//                required
//              />
//            </div>
//            <button
//              type="submit"
//              className="w-full py-3 bg-[#162A41] text-white font-semibold rounded hover:bg-blue-800"
//            >
//              Log ind
//            </button>
//            <article>
//                <p>Log in med</p>
//                <div className="mt-3 flex flex-row items-center justify-between">
//                    <button className="w-[8em] h-11 bg-[#DD4B39] text-white rounded">Google</button>
//                    <button className="w-[8em] h-11 bg-[#3B5999] text-white rounded">Facebook</button>
//                    <button className="w-[8em] h-11 bg-[#162A41] text-white rounded">Twitter</button>
//                </div>
//            </article>
//            <p className="text-center">Har du ikke en bruger? <button className="text-[#2F80ED]">Opret bruger</button></p>
//          </form>
//        </section>
//      </div>
//    </>
//  );
//}
//
//