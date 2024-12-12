import Image from "next/image";
import Link from "next/link";
 
export default function notFound() {
    return (
        <section className="flex flex-col justify-center items-center bg-blue-50 h-screen gap-6">
            <h1
                className="text-9xl font-bold text-white"
                style={{
                  WebkitTextStroke: '2px black', // Stroke
                  WebkitTextFillColor: 'white',  // Text color
                }}
            >
              HOV!
            </h1>
            <h2 className="font-bold text-4xl">Du er havnet på en side som ikke findes!</h2>
            <p className="text-lg w-1/4 text-center">Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
            <Link href="/" className="bg-blue-950 text-white py-4 px-6">Tilbage til forsiden</Link>
        </section>
    )
}