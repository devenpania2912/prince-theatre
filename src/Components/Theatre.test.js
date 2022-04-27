import React from "react";
import ReactDOM from "react-dom";
import Theatre from './Service';
import { cleanup } from "@testing-library/react";

import renderer from 'react-test-renderer';

afterEach(cleanup);

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
        'providerList':[{provider}]

    }]
    ReactDOM.render(<Theatre movieList={sampleMovieList}/>,div);
    ReactDOM.unmountComponentAtNode(div);
})

it("Matches Snapshot",()=>{
    let provider={
        'id':'123',
        'name': 'Netflix',
        'price': '20'
    }
    let sampleMovieList=[{
        'id':'123',
        'poster':'',
        'title':'ABC',
        'providerList':[{provider}]

    }]

    const snap=renderer.create(<Theatre movieList={sampleMovieList}/>)
    expect(snap).toMatchSnapshot();
})