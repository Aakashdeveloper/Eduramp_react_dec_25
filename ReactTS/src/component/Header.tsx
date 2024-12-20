import {type ReactNode } from "react";

interface HeaderProps{
    image:{
        src:string;
        alt:string
    };
    children:ReactNode
}
function Header({image,children}:HeaderProps){
    return(
        <div>
            <img src={image.src} alt={image.alt} style={{height:150, width:150}}/>
            <p>{children}</p>
        </div>
    )
}

export default Header;