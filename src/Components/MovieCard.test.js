import React from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';

it("Renders Without Crashing",()=>{
    const div=document.createElement("div");
    let provider={
        'id':'123',
        'name':'Netflix',
        'price': '20'
    }

    let sampleMovie={
        'id':'1234',
        'poster':'',
        'title':'MOVIE',
        'providerList':[provider]
    }
    ReactDOM.render(<MovieCard movie={sampleMovie}/>,div)
})