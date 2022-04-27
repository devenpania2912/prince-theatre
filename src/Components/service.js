import {useState,useEffect} from 'react';
import axios from 'axios';
import Theatre from './Theatre';
import MovieList from './MovieListClass';


const Service = () => {

    const fwApi ="https://challenge.lexicondigital.com.au/api/v2/filmworld/movies";

    const cwApi ="https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies";

    const headers =  {
        headers: {
            'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
        }
        }

    async function getAllFwMovies() {
            try{
                let res= await axios.get(fwApi,headers);
                updateFwMovies(res.data.Movies);
                updateFwFlag(0);
            }
            catch(e){
                updateFwFlag(1);
                console.log("Error:",e.message,"Retrying...");
            }

    }

    async function getAllCwMovies() {
        try{
            let res= await axios.get(cwApi,headers);
            updateCwMovies(res.data.Movies);
            updateCwFlag(0);
        }
        catch(e){
            updateCwFlag(1);
            console.log("Error:",e.message, "Retrying...");
        }

}
    
    const[fwMovies,updateFwMovies]=useState([]);
    const[cwMovies,updateCwMovies]=useState([]);

    const[cwFlag,updateCwFlag]=useState(0);
    const[fwFlag,updateFwFlag]=useState(0);

   

    //Film World and Cinema World, movie list download 
    useEffect(()=>{
        //console.log("FW FLAG UP");
        getAllFwMovies();
  
    },[fwFlag])

    useEffect(()=>{
        //console.log("CW FLAG UP");
        getAllCwMovies();
    },[cwFlag])


    const movieList = new MovieList();
    const[finalMovieList,updateFinalList]=useState([]);

    useEffect(()=>{

        let tempList = cwMovies.concat(fwMovies);

        if(tempList.length>1 && typeof(tempList)!= undefined)
        {
            for(let i=0 ; i< tempList.length ; i++)
            {
                
                movieList.addToMovieList(tempList[i]);
            }
        }

        // if(cwMovies.length>1 && typeof(cwMovies)!= undefined)
        // {
        //     for(let i=0; i<cwMovies.length ; i++){
        //         movieList.addToMovieList(cwMovies[i]);
        //     }
        // }

        // if(fwMovies.length>1 && typeof(fwMovies)!=undefined)
        // {
        //     for(let i=0; i<fwMovies.length ; i++){

        //         movieList.addToMovieList(fwMovies[i]);
        //     }
        // }
        
        //console.log("MovieList",movieList);
        updateFinalList(movieList);
        

        //console.log("Movie List",finalMovieList);

        //console.log("FINAL",finalMovieList);

        
    },[fwMovies, cwMovies])


    return (
        <div>
            {finalMovieList && <Theatre movieList={finalMovieList.movieList}/>}
        </div>
    )
}

export default Service
