//React Displaying Mobile Product List Assignment

import {useState} from "react";
import './table.css';

function MobileList(){
let [mobilearray,setMobilearray] =useState([
    {id:1,name:"Nokia G42",description:"With Nokia G21 and its 50 MP triple-camera, including main, depth and macro lenses, taking quality photos is a cinch. It also comes equipped with advanced low light imaging, so you'll be able to bring all your amazing ideas to life", price:9000,rating:4, stockStatus:"In Stock"},
    {id:2,name:"Samsung galaxy s24 ultra",description:"The Galaxy S24 Ultra still has the best zoom camera you can find on a smartphone. It's better than the Galaxy S23 Ultra's 10x zoom, and it's much better than the 5x zoom you'll find on the iPhone 15 Pro Max", price:120000,rating:5, stockStatus:"In Stock"},
    {id:3,name:"iPhone15 Pro",description:"The iPhone 15 Pro brings numerous improvements compared to the iPhone 14 Pro, including a lighter titanium build, the Action button for programming shortcuts, a USB-C port for universal charging and a camera that can capture photos at 24 megapixels by default.", price:120000,rating:5, stockStatus:"In Stock"},
    {id:4,name:"Realme 11 Pro",description:"The Realme 11 Pro has the same display as the Realme 11 Pro+ - it's a 6.7-inch OLED panel of extended 1080p resolution (394ppi),", price:24000,rating:4, stockStatus:"Out of Stock"}
]);

return (
    <div>
        <h1>Mobile Product List</h1>
        <table class="center"><tr class="trStyle">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock</th>
                        </tr></table>
        {mobilearray.map( (mobile) => (
            <div key={mobile.id}>

<table class="center">
<tr class="tr1Style">
                            <td class="tdStyle">{mobile.name}</td>
                            <td class="tdStyle">{mobile.description}</td>
                            <td class="tdStyle">{mobile.price}</td>
                            <td class="tdStyle">{mobile.rating}</td>
                            <td class="tdStyle">{mobile.stockStatus}</td>
                        </tr>

            </table>
            </div>
        ))}
        </div>
    
);
}

export default MobileList;