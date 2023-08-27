import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link} from "react-router-dom"
import Navbar from "../components/Navbar";


function AllBeersPage() {
const [AllBeers, setAllBeers]=useState(undefined)
const[finBucleInf, setFinBucleInf]= useState(false)
useEffect(()=>{
axios.get("https://ih-beers-api2.herokuapp.com/beers")
.then((response)=>{
    if(!finBucleInf)
    console.log(response)
    setAllBeers(response.data)
    setFinBucleInf(true)
})
.catch((error)=>{
    console.log(error)
},[finBucleInf])


})
return(
<div>



{AllBeers === undefined ? (<h3>Algo va tarde</h3>) : (
        <ul>
          {AllBeers.map((eachBeer) => (
           <li key={eachBeer._id}> <Link to={`/beers/${eachBeer._id}`}>
                <img src={eachBeer.image_url} alt="img cerveza" width={100}/>, 
                {eachBeer.name}, {eachBeer.tagline} y {eachBeer.contributed_by}</Link></li>
            
          ))}
        </ul>
      )}




</div>
)
}

export default AllBeersPage;
