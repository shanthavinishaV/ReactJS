import {useEffect, useState} from 'react';

//1. **State Initialization:**
//2. **Implementing `useEffect` with Different Dependencies:**
function Counter()
{
    let [counter,setCount] = useState(0);
    let [name, setName] = useState();

    //`useEffect` with an empty dependency array (`[]`)
    useEffect (() =>{
        console.log("Empty Dependency array");
        }, []
    );

    //`useEffect` with no dependency array
    useEffect (() =>{
        console.log("No Dependency");
        }
    );

    //`useEffect` with `name` as the dependency
    useEffect (() =>{
        console.log("Name as dependency");
        },[{name}]
    );

    //`useEffect` with `counter` as the dependency
    useEffect (() =>{
        console.log("Counter as dependency");
        },[{counter}]
    );

    //`useEffect` with both `name` and `counter` as dependencies
    useEffect (() =>{
        console.log("Counter and name both as dependency");
        },[{counter},{name}]
    );

    //function to append 'a' to the name provided in input field when clicked on submit button
    function appendChar()
    {
        let name1;
        
        //if name is empty or undefined get it from the textbox
        if (name === '' || name === undefined)
        {
            name1  = document.getElementById("username").value;
        }
        //get the previous rendered value
        else
            name1 = name;

        //append the last name with 'a'
        setName(name1 + 'a'); 
    }

    return (
        <div>
            <h1>{counter}</h1>
            <h1>{name}</h1>
            <input type="text" id="username" name="username"></input>
            <button style={{backgroundColor: 'Blue'}} 
            onClick={function(event){ setCount(counter+1); appendChar()}}>Submit</button>
        </div>    
    );
}

export default Counter;