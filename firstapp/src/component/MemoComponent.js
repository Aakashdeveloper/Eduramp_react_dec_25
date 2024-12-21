import {useState} from 'react';
import {useSquare} from './hookes/useSquare'

function SquareCalc({number}){

    const square = useSquare(number)

    return(
        <div>
            <p>Number: {number}</p>
            <p>Square: {square}</p>
        </div>
    )

}

function MemoComponent(){

    const [value,setValue] = useState(5);

    return(
        <div>
            <input type="number" value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <button onClick={(e) => setValue(5)}>Click</button>
            <SquareCalc number={value}/>
        </div>
    )

}

export default MemoComponent;