import {useRef, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const base_url = process.env.REACT_APP_API_URL;

const Login = () => {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [message,setMessage] = useState();

    function handleSubmit(){
        const formData = {
            email: emailRef.current.value?emailRef.current.value:'aakash@gmail.com',
            password: passwordRef.current.value,
        }

        console.log(formData)
        fetch(`${base_url}/login`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token);
                navigate('/profile')
            }
        })

        // axios.post(`${base_url}/login`,JSON.stringify(formData),{
        //     headers:{
        //         'accept':'application/json',
        //         "Content-Type":"application/json"
        //     }

        // })
        // .then((res) => {
        //     console.log(res.data)
        //     if(res.data.auth == false){
        //         console.log(">>>>",res.data)
        //         setMessage(res.data.token)
        //     }else{
        //         sessionStorage.setItem('ltk', res.data.token);
        //         navigate('/profile')
        //     }
        // })
      
    }

    return(
        <>
            <br/>
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3>Login User</h3>
                </div>
                <div className='panel-body'>
                    <h2 style={{color:'red'}}>{message}</h2>
                    <div className='row'>
                        <div className='col-md-6 form-group'>
                            <label>Email</label>
                            <input className='form-control'
                            name="email"
                            ref={emailRef}
                            defaultValue='aakash@gmail.com'
                        />
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>Password</label>
                            <input className='form-control'
                            name="password"
                            ref={passwordRef}
                            defaultValue='12345678'
                        />
                        </div>

                        
                    </div>
                    <button className='btn btn-primary'
                        onClick={handleSubmit}>
                            Login
                        </button>
                </div>
            </div>
        </>
    )
}
export default Login;