import React from "react";
import ReactDOM from "react-dom";
import Theatre from './Service';

it("Renders Without Crashing",()=>{
    const div=document.createElement("div");
    let provider={
        'id':'123',
        'name': 'Netflix',
        'price': '20'
    }
    let sampleMovieList=[{
        'id':'123',
        'poster':'',
        'title':'ABC',
        'providerList':[provider]

    }]
    ReactDOM.render(<Theatre movieList={sampleMovieList}/>,div)
})