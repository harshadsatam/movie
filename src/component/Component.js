import React from "react";
import { useState } from "react";



export default function Component() {

    const [counter, updatecounter] = useState(0);

    
    return(
        <>
        <h1>hello word</h1>

        <h2>{counter}</h2>

        <button onClick={()=>{
            updatecounter(counter+1)
        }} >click increase</button>

    <p>right</p>

        <h1>Great Project</h1>


        </>
    )
}