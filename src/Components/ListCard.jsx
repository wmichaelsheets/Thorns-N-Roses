import { useEffect, useState } from "react"
import "./ListCard.css"
import { getAllFlowers } from "../Services/FlowerServices"


export const ListCard = ({nursery}) => {

    const[flowers, setFlowers] = useState([])    
    const[filteredFlowers, setFilteredFlowers] = useState([])
    
    useEffect(() => {
        getAllFlowers().then((flowerArray) => {
            setFlowers(flowerArray)
        })
    }, [])

    useEffect(() => {
        const nurseryFlowers = flowers.filter (flower => flower.id === nursery.flowersJoin.id) 
        console.log(nurseryFlowers)
        setFilteredFlowers(nurseryFlowers)
    }, [flowers])
    
    
    return (
       <div className="listCard">
        <h2>{nursery.name}</h2>
  

       </div>

    )
}