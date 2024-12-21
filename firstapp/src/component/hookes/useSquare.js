import {useMemo} from 'react';

const calculate = (num) => {
    console.log("Calculating....",num)
    return num * num
}

export const useSquare = (number) => {
    return useMemo(() =>  calculate(number),[number])
}

