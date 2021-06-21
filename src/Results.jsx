import React from "react";
import "./index.css";


const Results=(props)=>{
    const  imgs=`https://source.unsplash.com/600x400/?${props.name}`;
    return(
        
        <>
           <img src={imgs} alt="just and random image"/>
        </>
    );
}

export default Results;