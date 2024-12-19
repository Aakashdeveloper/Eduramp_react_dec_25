import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './listing.css';
import CuisineFilter from '../filters/cuisineFilter';
import ListingDisplay from './listingDisplay';

const base_url = process.env.REACT_APP_API_URL;

const Listing = () => {

    let params = useParams();
    const [mealId] = useState(params.mealId)
    const [restaurant,setRestaurant] = useState()

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) => setRestaurant(res.data))

        return () => {
            console.log('Cleanup on unmount on listing')
        }
    },[])

    const setDatPerFilter = (data) => {
        setRestaurant(data)
    }

    return(
        <div className='row'>
            <div id='mainListing'>
                <div id="filter">
                    <CuisineFilter mealId={mealId}
                    restPerCuisine={(data) => {setDatPerFilter(data)}}/>
                </div>
                <ListingDisplay listData={restaurant}/>

            </div>
        </div>
    )
}

export default Listing