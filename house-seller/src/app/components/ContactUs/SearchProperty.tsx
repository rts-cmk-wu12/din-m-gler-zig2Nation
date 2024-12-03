import { CiSearch } from "react-icons/ci";
export default function SearchProperty() {
    return(
        <section>
            <form action="" className="bg-[#EEF7FF] w-[18em] h-[7em] p-[1em]">
                <div className="border-b-2 border-[#D3DEE8] h-10">
                    <h2 className="font-semibold">Search Property</h2>
                </div>
                <label htmlFor="" className="flex flex-row mt-[1em]">
                <CiSearch className="text-[#7B7B7B]"/>
                    <input type="text" placeholder="Search" className="w-full border border-white"/>
                </label>
            </form>
            <article className="flex flex-col items-center justify-center h-[20em] w-[18em] bg-[#162A41] p-[3em] gap-2">
                <p className="text-white text-center font-semibold">Find The Best <br /> Property <br />
                <br />For Rent Or Buy</p>
                <div className="border-b-2 border-[#D3DEE8] h-10 w-[20%]"></div>
                <p className="text-white text-sm">Call Us Now</p>
                <p className="font-semibold text-xl text-white text-center">+00 123 456 789</p>
            </article>
        </section>
    )
}