import React,{useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import './placeOrder.css';

const base_url = process.env.REACT_APP_API_URL;
const post_url = process.env.REACT_APP_POST_URL;

const PlaceOrder = () => {

    let {restName} = useParams()
    const [formData,setFormData] = useState({
        id:Math.floor(Math.random()*100000),
        name:"Amit",
        email:"amit@gmail.com",
        cost:0,
        phone:"987654432",
        address:"U Block Pune",
        menuItem:""
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})

    }
    const placeOrder = () => {
        const orderData = {
            ...formData,
            rest_name:restName,
            menuItem: sessionStorage.getItem('menu')
        };

        fetch(post_url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(orderData)
        }).then(() => navigate('/viewOrder'))
    }

    const renderMenu = (data) => {
        if(data){
            return data.map((item) => (
                <div className='orderItem' key={item.menu_id}>
                    <img src={item.menu_image} alt={item.menu_name}/>
                    <h3>{item.menu_name}</h3>
                    <h4>Rs. {item.menu_price}</h4>
                </div>
            ))

        }
    }

    useEffect(() => {
        const menuItem = sessionStorage.getItem('menu')
        const orderId = menuItem ? menuItem.split(',').map(Number) :[]
        fetch(`${base_url}/menuItem`,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.forEach((item) => {
                totalPrice += parseFloat(item.menu_price);
            })
            setFormData((prevState) => ({
                ...prevState,
                menuItem:data,
                cost:totalPrice
            }))

        })
    },[])

    return(
        <>
            <br/>
            <div className='container'>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h3>You are placing Order for {restName}</h3>
                    </div>
                    <div className='panel-body'>
                        <input type="hidden" name="cost" value={formData.cost}/>
                        <input type="hidden" name="id" value={formData.id}/>
                        <input type="hidden" name="rest_name" value={restName}/>
                        <div className='col-md-6 form-group'>
                            <label>Name</label>
                            <input className='form-control'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Email</label>
                            <input className='form-control'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Phone</label>
                            <input className='form-control'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Address</label>
                            <input className='form-control'
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        </div>
                        {renderMenu(formData.menuItem)}
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>Total Price is Rs.{formData.cost}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={placeOrder}>
                            CheckOut
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PlaceOrder
