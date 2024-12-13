import Link from "next/link"
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EEF7FF] p-4">
      <div className="text-center flex flex-col items-center space-y-6 max-w-md">
        <div
          className="relative flex justify-center"
          style={{
            background: "linear-gradient(to bottom, #EEF7FF 60%, #162A41 40%)",
            padding: "20px 0",
          }}
        >
          <h1
            className="text-9xl font-bold tracking-tighter text-white"
            style={{
              WebkitTextStroke: "2px black", 
            }}
          >
            Hov!
          </h1>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-[#1e2a3b]">
            Du er havnet på en side som ikke findes!
          </h2>
          <p className="text-[#4a5568] text-sm">
            Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.
          </p>
        </div>
            
        <Link href="/" className="bg-blue-950 text-white py-4 px-6">Tilbage til forsiden</Link>
      </div>
    </div>
  )
}