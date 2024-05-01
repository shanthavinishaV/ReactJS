/**Task 1: Setting Up the `OrderStatus` Component**/

//importing React and the `useState` hook
import { useState } from "react";
//`OrderStatus` functional component
function OrderStatus() {
    const [selectedValue, setSelectedValue] = useState('');
    let [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'Shantha',
        items: 3
    });

    /**Task 3: Implementing the Update Logic**/
    //Updates the `status` property of the order
    function handleStatusChange(){
        var myOrderlist = document.getElementById("myOrderList");
        let OrderDetails= myOrderlist.options[myOrderlist.selectedIndex].text;
        console.log(OrderDetails);
        /**spread operator to maintain the rest of the order object intact */
            setOrder({...order,status:OrderDetails})
    }
         
        return (
            <div>
                <h1> React Assignment: Managing Object State with useState</h1>
                <h2 align="center">Order :  {order.id}</h2>
                <h2 align="center">Status : {order.status}</h2>
                <h2 align="center"> Customer : {order.customer}</h2>
                <h2 align="center">Items : {order.items}</h2>
                {/**Task 2: Creating the Update Interface**/}
                <b><label for="Order"><font size="5">Choose a Status : </font></label></b>
                <select id = "myOrderList">
                <option label=' Order Status'>{order.status}</option>  
                <option> Processing </option>  
                <option> Shipped </option>  
                <option> Delivered </option>  
                 </select> <br/><br/><br/><div>
         <button onClick={handleStatusChange}>Update Status</button></div>
            </div>
        );  
}

export default OrderStatus;