import Movie from './MovieClass'

export default class finalMovieList{
    constructor(){
        this.finalMovieList=[];
    }
    
    addToMovieList(movie){

        if(this.finalMovieList.length==0){
            
            //console.log("till here",this.movieList);
            this.finalMovieList.push(movie); // pushing our object to movieList - List should consist of our objects

        }
        else{
            for(let i=0 ; i < this.finalMovieList.length ; i++)
            {
                if(this.finalMovieList[i].id == movie.id){

                    break;
                }
                
            }
            this.finalMovieList.push(movie);
        }
    }

}


