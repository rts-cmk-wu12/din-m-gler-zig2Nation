'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CreateUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: "", email: "", password: "", confirmPassword: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Fulde navn er påkrævet.";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Ugyldig emailadresse.";
            valid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password skal være mindst 6 tegn.";
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Bekræft password matcher ikke.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (validateForm()) {
            console.log("Formularen er gyldig, sender data:", formData);

            // Clear form data after successful submission
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            alert("Brugeren er oprettet!");
        } else {
            console.log("Formularen er ugyldig, tjek fejl.");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="relative w-full h-[10em]">
                <Image
                    src="/Mask-Group.png"
                    alt="account login baggrundsbillede af et hus"
                    width={1700}
                    height={300}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                    <h2 className="text-2xl font-bold">Account Register</h2>
                    <div className="flex flex-row justify-center gap-4 mt-2">
                        <p>Home</p>
                        <div className="w-[0.1em] h-[1em] bg-[white]"></div>
                        <p className="text-[#162A41]">Login</p>
                    </div>
                </article>
            </div>
            <div className="w-full flex items-center mb-20">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center mt-32 min-h-[70vh] border w-[40em] p-[4em] gap-4 ml-[28%] shadow-lg"
                >
                    <h2 className="font-semibold">Opret bruger hos Din Mægler</h2>
                    <label htmlFor="name" className="flex flex-col gap-2">
                        Fulde navn
                        <input
                            type="text"
                            name="name"
                            placeholder="Fulde navn"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-[#D3DEE8] w-[30em] p-2"
                        />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2">
                        Email adresse
                        <input
                            type="text"
                            name="email"
                            placeholder="Email adresse"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-[#D3DEE8] w-[30em] p-2"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-[#D3DEE8] w-[30em] p-2"
                        />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </label>
                    <label htmlFor="confirmPassword" className="flex flex-col gap-2">
                        Bekræft password
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Bekræft password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="border border-[#D3DEE8] w-[30em] p-2"
                        />
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
                    </label>
                    <button
                        type="submit"
                        className="w-[30em] py-3 bg-[#162A41] text-white font-semibold"
                    >
                        Opret bruger
                    </button>
                </form>
            </div>
        </div>
    );
}
