export default class Provider{ //adds provider object
    constructor(){
        this.provider={}
    }
    
    addProvider(id,provider,price){
        this.provider.name = provider;
        this.provider.price = price;
        this.provider.id=id;
    }
    
}