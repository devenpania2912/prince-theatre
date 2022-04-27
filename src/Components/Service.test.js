import React from "react";
import ReactDOM from "react-dom";
import Service from './Service';

it("Renders Without Crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Service/>,div)
})