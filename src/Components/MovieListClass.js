import Movie from './MovieClass'

export default class MovieList{
    constructor(){
        this.movieList=[];
    }
    
    addToMovieList(movie){

        let strippedId= movie.ID.substring(2); //stripping the ID from movie received from API as it has provider name and ID - we just need the ID

        let movieToBeAdded = new Movie(); // Initialise the movie object that we need 
        movieToBeAdded.addMovie(movie); // Add movie that we recieved to our own MOVIE object 
        
        
        if(this.movieList.length==0){
            
            //console.log("till here",this.movieList);
            this.movieList.push(movieToBeAdded.movie); // pushing our object to movieList - List should consist of our objects

        }
        else{
            for(let i=0 ; i < this.movieList.length ; i++)
            {
                if(this.movieList[i].id == strippedId){

                    break;
                }
                
            }
            this.movieList.push(movieToBeAdded.movie);
        }
    }

}


