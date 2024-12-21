import React,{useState} from 'react';
import './Header.css';
import MemoComponent from './MemoComponent';

const Header = (props) => {

    const [title] = useState("React Search App")
    const [count,setCount] = useState(0)
    const [keyword,setKeyword] = useState('User Input Here')
   

    const handleClick = () => {
        setCount(count+1)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setKeyword(event.target.value)
        props.userText(event.target.value)
    }

    return(
        <header>
            <div className="logo">{title}</div>
            <input onChange={handleChange}/>
            <div id="userText">{keyword}</div>
            <MemoComponent/>
            {/* <div>
                <h2>{count}</h2>
                <button onClick={handleClick}>Counter</button>
            </div> */}
            <hr/>
        </header>
    )
    
}



export default Header