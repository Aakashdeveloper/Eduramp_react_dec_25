import React,{useState} from 'react';
import Header from './Header';
import Footer from './footer';
import ProductDisplay from './ProductDisplay';
import JSON from './data.json'

const App = () => {

    const [productData] = useState(JSON)
    const [filteredData, setFilterData] = useState(JSON)

    const filterProduct = (keyword) => {
        let output = productData.filter((data) => {
            return(
                data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
                ||  data.description.toLowerCase().indexOf(keyword.toLowerCase())>-1
            )
        })
        setFilterData(output)
    }

    return(
        <>
            <Header userText={(data) => {filterProduct(data)}}/>
            <ProductDisplay products={filteredData}/>
            <Footer year="2025" month="Jan"/>
        </>
       
    )
   
}

export default App;