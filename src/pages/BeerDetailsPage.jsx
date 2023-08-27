import axios from "axios"
import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import AllBeersPage from "./AllBeersPage";
import Navbar from "../components/Navbar";

function BeerDetailsPage() {
    const params = useParams();
    const[BeerDetails,setBeerDetails]=useState(null)
    useEffect(()=>{
        getData()
        console.log(params._id)
    },[params._id])

    const getData=async()=>{
        try{
            const response=await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params._id}`)
            setBeerDetails(response.data)
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

    if(BeerDetails===null){
        return <h3>loading</h3>
    }

    return(
<div>
<img src={BeerDetails.image_url} alt="Beer" />
<h3>{BeerDetails.name}</h3>
<h3>{BeerDetails.tagline}</h3>
<h3>{BeerDetails.first_brewed}</h3>
<h3>{BeerDetails.attenuation_level}</h3>
<h3>{BeerDetails.description}</h3>
<h3>{BeerDetails.contributed_by}</h3>


</div>
    )
}

export default BeerDetailsPage;
