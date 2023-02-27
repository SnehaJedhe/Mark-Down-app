import React from "react";
import "./App.css"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function Main({val,setVal}) {

    return(

        <>
        <div className="contain">
        <div className="leftContainer">
            <h1>Type Here</h1>
            <hr/>
           <textarea value={val} onChange={(e)=>{
            // console.log(e.target.value);
            setVal(e.target.value)
            console.log(val);
           }}></textarea>
        </div>
        <div className="rightContainer">
            <h1>Output</h1>
            <hr/>
        <ReactMarkdown>{val}</ReactMarkdown>
        </div>
        </div>
        </>
    );
    
}

export default Main;