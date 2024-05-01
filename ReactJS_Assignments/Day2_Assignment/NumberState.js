//React useState Hook Assignment

//Within `NumberState.js`, start by importing React and the `useState` hook:
import { useState } from "react";

/*Define a functional component `NumberState` that renders the current state number and buttons
for interactions.*/
function NumberState() {
    let [count, setCount] = useState(0);
 
    //function to increment the number  
    function incrementCounter() {
       // increases the number by 1 
       setCount(count + 1);
        console.log(count);
    }
   // function to decrement the number
    function decrementCounter() {
        //decreases the number by 1
        if(count)
        {
            setCount(count - 1);
            console.log(count);
        }        
         
     }
    // function to reset number 
     function resetCounter() {
        // sets the number back to its initial value (0)
        setCount(0);
         console.log(count);
     }

  return (
    <div>
      <h1>{count}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  );

  }
 
export default NumberState;