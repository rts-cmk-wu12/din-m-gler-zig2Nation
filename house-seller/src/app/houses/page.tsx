import Search from "../components/Search"
import AllHomes from "../components/AllHomes"
export default function Homes() {
    return(
        <div className="flex items-center justify-center flex-col">
            <AllHomes/>
            <div>
                <Search/>
            </div>
        </div>
    )
}