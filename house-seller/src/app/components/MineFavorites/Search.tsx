import { CiSearch } from "react-icons/ci";
export default function Search() {
    return(
        <form action="" className="w-[60em] mt-28 border-b-2 border-[#D3DEE8]">
            <label htmlFor="søg efter favoritter" className="flex flex-row items-center gap-1 border border-[#D3DEE8] rounded-sm w-[20em] p-2 mb-3">
            <CiSearch />
                <input type="text" placeholder="Søg i favoritter" className="w-full"/>
            </label>
        </form>

    )
}
