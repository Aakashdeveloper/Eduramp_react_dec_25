import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link,useSearchParams} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const base_url = process.env.REACT_APP_API_URL;

const Details = () => {

    const [details,setDetails] = useState({});
    const [searchParams] = useSearchParams()
    const mealId = sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1

    useEffect(() => {
        const fetchData = async()=> {
            try{
                let restId = searchParams.getAll('restId');
                let response = await axios.get(`${base_url}/details/${restId}`)
                console.log(">>>",response.data[0])
                setDetails(response.data[0])
            }catch(err){
                console.error(err)
            }
        }

        fetchData()

    },[])

    return(
        <>
            <div className='main'>
                <div className='tileImage'>
                    <div className='imageClass'>
                       <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                    </div>
                </div>
                <div className='tileContent'>
                    <div className='content'>
                        <h1>{details.restaurant_name}</h1>
                        <h1>{details.restaurant_name}</h1>
                                <span id="cfeedback">231 Customers Rating Average</span>
                                <h3>Old Price <del>Rs. 450</del></h3>
                                <h3>Offer Price Rs. {details.cost}</h3>
                                <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                    <div>
                                        <div className="icons">
                                            <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                        </div>
                                        <div className="icons">
                                            <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                        </div>
                                    </div>
                    </div>
                    <br/>
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                            <Tab>Title 3</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>

    )
}

export default Details
