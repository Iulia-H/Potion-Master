class Pot{
    constructor(){
        this.size = 4;
        this.ingredients = [];

    }

    emptyPot(){
        this.ingredients = [];
    }

    addItem(item){
        if (this.size === this.ingredients.length){
            console.log("Too much stuff!");
        }else{
            this.ingredients.push(item);
        }
    }


}

export const pots = new Pot();