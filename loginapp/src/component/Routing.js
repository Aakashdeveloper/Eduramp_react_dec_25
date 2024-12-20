import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './main';
import Register from './Register';
import Login from './Login';
import Profile from './profile';
import Users from './Userlist'

const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}>
                            <Route index element={<Register/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/users" element={<Users/>}/>
                        </Route>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
export default Routing;