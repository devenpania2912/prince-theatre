//This file is not being used 

import axios from "axios";
import {useState,useEffect,useMemo} from 'react';

const fwApi ="https://challenge.lexicondigital.com.au/api/v2/filmworld/movies";

const cwApi ="https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies";

const headers =  {
    headers: {
        'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
    }
}

class Service{
    constructor(){
    }
    
    getAllMovies(api,headers) {
        return axios.get(api,headers);
    }

    getAllFwMovies(){
        this.getAllMovies(fwApi,headers);
    }

    getAllCwMovies(){
        this.getAllMovies(cwApi, headers);
    }



}

export default Service
