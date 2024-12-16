import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()

        console.log("inside constructor")

        this.state={
            title:'React Search App',
            count:0
        }
    }

    render(){
        console.log("inside render")
        return(
                <header>
                    <div className="logo">{this.state.title}</div>
                    <input/>
                    <div id="userText">User Text Here</div>
                    <div>
                        <h2>{this.state.count}</h2>
                        <button>Counter</button>
                    </div>
                    <hr/>
                </header>
            )
    }
}

// const Header = () => {
//     return(
//         <header>
//             <div className="logo">Edu Ramp</div>
//             <input/>
//             <div id="userText">User Text Here</div>
//             <hr/>
//         </header>
//     )
// }

export default Header