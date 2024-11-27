
import AllDetails from "@/app/components/houseInfo/AllDetails"
export default function HouseDetails({ params }: { params: { id: string } }) {
    return(
        <AllDetails id={params.id}/>
    )
}