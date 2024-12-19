import React from 'react';
import axios from 'axios';

const base_url = process.env.REACT_APP_API_URL;

const  CuisineFilter = ({mealId,restPerCuisine}) => {
    const cuisineFilter = (event) => {
        const cuisineId = event.target.value;
        let cuisineUrl = "";
        if(cuisineId === ""){
            cuisineUrl = `${base_url}/filter/${mealId}`
        }else{
            cuisineUrl = `${base_url}/filter/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl).then((res) => {
            restPerCuisine(res.data)
        })
    }

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={cuisineFilter}>
                <div className='radio'>
                    <input type="radio" name="cuisine" value=""/>All
                </div>
                <div className='radio'>
                    <input type="radio" name="cuisine" value="1"/>North Indain
                </div>
                <div className='radio'>
                    <input type="radio" name="cuisine" value="2"/>South Indian
                </div>
                <div className='radio'>
                    <input type="radio" name="cuisine" value="3"/>Chinese
                </div>
                <div className='radio'>
                    <input type="radio" name="cuisine" value="4"/>Fast Food
                </div>
                <div className='radio'>
                    <input type="radio" name="cuisine" value="5"/>Street Food
                </div>

                

            </div>
        </>
    )

}

export default CuisineFilter;