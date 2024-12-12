import Search from "../components/AllHomes/Search"
import AllHomes from "../components/AllHomes/AllHomes"
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