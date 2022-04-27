import React from 'react'
import './Movie.css'
import {useState,useEffect} from 'react';
import axios from 'axios';


const Movie = ({movie, currency}) => {

 
    const[currentCurrency,updateCurrency]=useState(currency);
    //console.log("Currency/Movie input",currency,movie);

    useEffect(()=>{
        //console.log("Getting Movie",movie);
        updateCurrency(currency);
        currencyMultiplier(currency,movie);
        highlightCheaper(movie);
    },[currency,movie])

    function highlightCheaper(movie){
        let cheapestIndex=0;
        if(movie.providerList != undefined){
            let cheapest= movie.providerList[0].provider.price;
            for(let i=0; i< movie.providerList.length ; i++){
                if(movie.providerList[i].provider.price < cheapest){
                    cheapest = movie.providerList[i].provider.price;
                    cheapestIndex=i;   
                }
            }

        // cheapest index is the index for cheapest movie     
        if(movie.providerList[cheapestIndex] != undefined){
               // if(document.getElementsByClassName(movie.providerList[cheapestIndex].provider.name) != undefined){
                    //     document.getElementsByClassName(movie.providerList[cheapestIndex].provider.name).style.backgroundColor="green";
                    // let divs= document.getElementsByClassName(movie.providerList[cheapestIndex].provider.name);
                    //     [].slice.call( divs ).forEach(function ( div ) {
                    //         div.innerHTML ="yes"
                    //     });
          
                    // }
              //console.log("green",movie.providerList[cheapestIndex].provider.name,movie.providerList[cheapestIndex].provider.name);
        
        }
        
        }
        
    }

    async function currencyMultiplier(currency,movie){

        let api="https://api.exchangerate.host/latest";
        let rates={}
        try{
            let res= await axios.get(api);
            rates=(res.data.rates);
            //console.log(rates);
        }
        catch(e){
            console.log("error",e);
        }

        if(movie.providerList != undefined){
            
           // if(currency!=="AUD"){
                //console.log("currency",currency);
                for(let i=0; i< movie.providerList.length ; i++){
                    let basePrice= movie.providerList[i].provider.price;  
                    basePrice*= 0.67; //now baseprice is in Euros because API's base price is Euros
                    let multiplier = rates[currency];
                    //console.log(multiplier,currency);
                    basePrice*=multiplier; //final price
                   
                    // if(true){
                    //      console.log("Changing",movie.providerList[i].provider.price);
                    // setTimeout(()=>{
                    //     let divs= document.getElementsByClassName(movie.providerList[i].provider.name);
                    //     [].slice.call( divs ).forEach(function ( div ) {
                    //         div.innerHTML =movie.providerList[i].provider.price;
                    //     });
                    // },200)
                    // }
                    // else{
                    //     console.log("OG Price",movie);
                    //     let divs= document.getElementsByClassName(movie.providerList[i].provider.name);
                    //     [].slice.call( divs ).forEach(function ( div ) {
                    //         div.innerHTML =movie.providerList[i].provider.price;
                    //     });
                    // }
                   
                    //document.getElementsByClassName(movie.providerList[i].provider.name).innerHTML="YES";
                    //console.log(movie.providerList[i].provider.name);
                }
            //}
            // if(currency==="AUD"){
            //     for(let i=0; i< movie.providerList.length ; i++){
            //     let divs= document.getElementsByClassName(movie.providerList[i].provider.name);
            //         [].slice.call( divs ).forEach(function ( div ) {
            //             div.innerHTML =movie.providerList[i].provider.price;
            //         });
            //     }
            // }
           
        }
        //console.log(movie.providerList[1].provider.price);

       
    }


    //console.log("Movie",movie);

    // useEffect(()=>{

    //     updateCurrency(currency)
        
    //  },[currency]);

    //  useEffect(()=>{
    //     if(movie.providerList[0].provider.price > movie.providerList[1].provider.price){
    //         let temp= document.getElementById(movie.providerList[1].provider.name);
    //         console.log("Got it",temp);
    //     }
    //  },[])

    return (
        <div className="movieCard">
          <img className='poster' src={movie.poster}/>
          <div className='title'>{movie.title}</div>
          <div className='price'>
            {movie.providerList.map((provider)=>
            <div key={provider.provider.name} >{provider.provider.name}: {currentCurrency} <div className={provider.provider.name}>{provider.provider.price}</div></div>
            )}
          </div>
        </div>
    )
}

export default Movie