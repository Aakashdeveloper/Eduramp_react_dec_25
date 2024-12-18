import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Home from './Home/home';
import Listing from './listing';
import Details from './Details/details';
const NotFound = () => <h1>404- Page Not Found</h1>


const Routing =() => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="listing/:mealId" element={<Listing/>}/>
                    <Route path="details" element={<Details/>}/>

                    
                    {/* Catch All Route for 404 */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )

}

export default Routing