import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Main from './Main';
import Profile from './Profile';
import Post from './Post';
import PostDetails from './PostDetails'
const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="post" element={<Post/>}/>
                        <Route path="post/:topic" element={<PostDetails/>}/>
                    </Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing