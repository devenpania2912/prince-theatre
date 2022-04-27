import './Theatre.css';
import {useState,useEffect} from 'react';
import Movie from './MovieCard'
import { currencyList } from './currencyList';
import MovieList from './MovieListClass';

const Theatre = ({movieList}) => {

    const logo = require('../logo.png') ;

    const [currency, updateCurrency] = useState("AUD");

    //console.log("Coming in",movieList);

    const[movies,updateMovies]=useState();

    useEffect(()=>{ //we need this to run everytime the movie list coming from services is updated
        let tempList = new MovieList();
        tempList = movieList;

        if(typeof(tempList)!== undefined && tempList!= undefined)
        {   
            if(tempList.length!=0)
            {
                
                tempList=cleanUpMovies(tempList);
                
            }  
        }
        
        updateMovies(tempList);
        //console.log("Final List",movies);

    },[movieList])

    function cleanUpMovies(list){ //cleans up the final movie list and merges the provider array 

        for(let i=0; i<list.length ; i++){
            for(let j=0; j<list.length ; j++){
                if(i!=j && list[i].id == list[j].id)
                {
                    list[i].providerList=list[i].providerList.concat(list[j].providerList);
                    list.splice(j,1);

                }
            }
        }

        return list;
    }

    function currencyUpdater(selected){
        //updateCurrency(selected);
        //console.log("Selected",selected);
    }

    return (
        <div className="page">
            {/* Page Logo */}
            <div className='logo'>
                <img src={logo}/>
            </div>

            {/* Currency Selector */}
            <div className='currency-selector-wrapper'>
                <label className='currency-label'>Currency: </label>
                <select className='currency-selector' onChange={(e) => updateCurrency(e.target.value)}>
                    {currencyList.map((currency)=>
                    <option key={currency.id} value={currency.code}> {currency.name} </option>
                    )}
                </select>
            </div>

            {/* Text */}
            <div className='wrapper'>
                <div className='heading'>Prince's Theatre</div>
                <div className='subheading'>Classic Movies At Home</div>
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>

            {/* Movie Cards */}
            <div className='movie-card-wrapper'>
                {movies && movies.map((movie)=>
                <Movie key={movie.id} movie={movie} currency={currency}/>
                )}
            </div>


        </div>
    )
}

export default Theatre
