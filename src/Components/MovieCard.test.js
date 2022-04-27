import { render,cleanup } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import MovieCard from './MovieCard';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("Renders Without Crashing",()=>{
    const div=document.createElement("div");
    let provider={
        'id':'123',
        'name': 'Netflix',
        'price': '20'
    }

    let sampleMovie={
        'id':'1234',
        'poster':'',
        'title':'MOVIE',
        'providerList':[]
    }
    ReactDOM.render(<MovieCard movie={sampleMovie}/>,div);
    ReactDOM.unmountComponentAtNode(div);
})

it("Matches Snapshot",()=>{
    let provider={
        'id':'123',
        'name': 'Netflix',
        'price': '20'
    }

    let sampleMovie={
        'id':'1234',
        'poster':'',
        'title':'MOVIE',
        'providerList':[{provider}]
    }
    const snap=renderer.create(<MovieCard movie={sampleMovie}/>).toJSON();
    expect(snap).toMatchSnapshot();

})