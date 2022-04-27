import Provider from "./ProviderClass";

export default class Movie{
    constructor(){
        this.movie={}
    }
    
    addMovie(movie){
        
        let providerToBeAdded= new Provider();

        let movieId= movie.ID.substring(2);
        let provider= movie.ID.substring(0,2);

        providerToBeAdded.addProvider(movie.ID, provider, movie.Price);

        this.movie={
            "id":movieId,
            "title":movie.Title,
            "poster":movie.Poster,
            "providerList":[]
        }

        

        if(this.checkProvider(this.movie.providerList, provider, movie.Price) == true)
        {
            this.movie.providerList.push(providerToBeAdded);
        }

        
    }

    checkProvider(providerList, provider, price){ //checks if the provider already exists

        

        if(providerList.length == 0){
            return true;
        }

        else{
            let flag = 0;

            for(let i=0 ; i < providerList.length ; i++)
            {
                if(providerList[i].name == provider)
                {
                    providerList[i].price=price; //updates the price if there is a new price
                    flag=1;
                }
            }

            if(flag==1) return false;
            if(flag==0) return true;

        }
    }


    
}
