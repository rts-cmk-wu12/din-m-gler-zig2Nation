//import { useEffect, useState } from "react"
//import { fetchFavorites, Home } from '../../../actions/favorits'; // Opdater stien efter din mappestruktur
//
//export default function HouseFavorites() {
//    const [favorites, setFavorites] = useState<Home[]>([])
//    const [loading, setLoading] = useState<boolean>(true); // For at håndtere loading-tilstand
//
//    useEffect(() => {
//        const loadFavorites = async () => {
//            setLoading(true)
//            const data = await fetchFavorites()
//            setFavorites(data)
//            setLoading(false)
//        }
//        loadFavorites()
//    }, [])
//
//    if (loading) {
//        return <p>Loading...</p>;
//      }
//
//
//      if (favorites.length === 0) {
//        return <p>Du har ingen favoritter endnu.</p>;
//      }
//      return (
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//          {favorites.map((home) => (
//            <div key={home.id} className="border p-4 shadow-md">
//              <h2 className="text-lg font-bold">{home.address}</h2>
//              <p>Pris: {home.price.toLocaleString()} kr.</p>
//              {home.images.length > 0 && (
//                <img src={home.images[0]} alt="Hus" className="w-full h-48 object-cover mt-2" />
//              )}
//            </div>
//          ))}
//        </div>
//      );
//    }
//