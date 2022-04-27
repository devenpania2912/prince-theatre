import React from "react";
import ReactDOM from "react-dom";
import Service from './Service';

import { render,cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Renders Without Crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Service/>,div)
    ReactDOM.unmountComponentAtNode(div);
})

it("Renders Service correctly",()=>{
    render(<Service/>)
})