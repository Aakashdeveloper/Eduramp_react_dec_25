import React, {useState} from 'react';

const MenuDisplay = ({menuData,finalOrder}) => {
    const [orderId, setOrderId] = useState([])
    //const orderId = []
    
    const placeOrder = (id) => {
        const updatedOrderId = [...orderId,id]
        //orderId.push(id)
        finalOrder(orderId)
        setOrderId(updatedOrderId)
        console.log(orderId)
    }

    const removeOrder = (id) => {
        let updatedOrder = orderId.filter(order => order !== id);
        // if(orderId.indexOf(id)> -1){
        //      updatedOrder = orderId.splice(orderId.indexOf(id),1)
        // }
        setOrderId(updatedOrder)
        finalOrder(orderId)
    }

    const renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item} &nbsp;</b>
                )
            })
        }
    }


    const renderMenu = (menuData) =>{
        if(menuData){
            return menuData.map((item) => (
                <div key={item.menu_id}>
                    <div>
                        <div className='col-md-7'>
                        <b>{item.menu_id}</b> &nbsp; <img src={item.menu_image}
                        alt={item.menu_name} style={{width:80,height:80}}/> &nbsp; 
                        {item.menu_name} - Rs.{item.menu_price}

                        </div>
                        <div className='col-md-4'>
                            <button className='btn btn-success'
                            onClick={() => placeOrder(item.menu_id)}>
                                <span className='glyphicon glyphicon-plus'></span>
                            </button> &nbsp;
                            <button className='btn btn-danger'
                            onClick={() => removeOrder(item.menu_id)}>
                                <span className='glyphicon glyphicon-minus'></span>
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return(
        <>
            <div className="col-md-12 bg-success">
                <h2>Item Added</h2>
                <h3>Item Number {renderCart(orderId)} Added</h3>
            </div>
            <div className='col-md-12 bg-info'>
                {renderMenu(menuData)}
            </div>
        </>
    )
}

export default MenuDisplay;