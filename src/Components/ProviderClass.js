export default class Provider{ //adds provider object
    constructor(){
        this.provider={}
    }
    
    addProvider(provider,price){
        this.provider.name = provider;
        this.provider.price = price;
    }
    
}