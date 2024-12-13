import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

interface EmployeeData {
    id: string | number;
    name: string;
    title: string;
    image: { url: string };
}

export default function ThreeEmployee() {
    const [employees, setEmployees] = useState<EmployeeData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchThreeEmployees = async () => {
            try {
                
                const response = await fetch("https://dinmaegler.onrender.com/agents?_limit=3", {
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

        fetchThreeEmployees();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center mt-32">
            <article className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-[#263048] font-bold text-[2em]">
                    Mød vores engagerede medarbejdere
                </h2>
                <p className="w-[33em] text-center">
                    Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores
                    medarbejdere.
                </p>
            </article>

            {loading && <p>Loading...</p>} {/* vis lodain imens jeg fetcher */}
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
                        <h3 className="text-xl font-bold hover:underline underline-offset-4">
                            <Link href={`/ContactAnEmployee/${employee.id}`}>{employee.name}</Link>
                        </h3>
                        <p className="text-[#7B7B7B]">{employee.title}</p>
                        <div className="flex flex-row items-center gap-2 mb-3">
                            <IoIosMail />
                            <p className="font-bold">in</p>
                        </div>
                    </div>
                ))}
            </article>
            <Link
                aria-label="se alle mæglere"
              href="/agents"
              className="mt-20 px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center"
            >
              Se alle mæglere
            </Link>

        </section>
    );
}
