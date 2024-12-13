'use client'
import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

interface EmployeeData {
    id: string | number;
    name: string;
    title: string;
    image: { url: string };
}

export default function AllBrokers() {
    const [employees, setEmployees] = useState<EmployeeData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchThreeEmployees = async () => {
            try {
                const response = await fetch("https://dinmaegler.onrender.com/agents", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Error fetching 3 employees");
                }

                const data = await response.json();
                console.log("Fetched data from API:", data);
                setEmployees(data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchThreeEmployees(); // Call the function to fetch data
    }, []);

    return (
        <section className="flex flex-col items-center justify-center mt-32 mb-20">
            {loading && <p>Loading...</p>} 
            {error && <p className="text-red-500">Error: {error}</p>}

            <article className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[5em]">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="flex flex-col items-center bg-gray-100 rounded shadow-md w-[19em] gap-2 mt-"
                    >
                        <img
                            src={employee.image.url}
                            alt={employee.name}
                            className="w-full h-[17em] object-cover mb-4"
                        />
                        <Link href={`/ContactAnEmployee/${employee.id}`}>
                            <h3 className="text-xl font-bold hover:underline underline-offset-4 cursor-pointer">{employee.name}</h3>
                        </Link>
                        <p className="text-[#7B7B7B]">{employee.title}</p>
                        <div className="flex flex-row items-center gap-2 mb-3">
                            <IoIosMail />
                            <p className="font-bold">in</p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
}
