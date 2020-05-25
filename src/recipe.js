import { recipes }  from "./recipes-list";
class RecipeBook {
    constructor(){
        this.contents = {};
    }

    addRecipe(input){
        let name;
        recipes.forEach(recipe => {
            
            if (JSON.stringify(input.sort()) === JSON.stringify(recipe.ingredients)) {
                name = recipe.name;
                this.contents[name] = input;
            }

        });
        return `${name}: ${input}`;
    }

    aRecipe(input){
        if (this.checkRecipe(input)){
            if (!Object.values(this.contents).includes(input)) {
                console.log(Object.keys(RECIPES).find(key => RECIPES[key] === input));
                let name = Object.keys(RECIPES).find(key => RECIPES[key] === input);
                this.contents[name] = input;
            }
            
        }
    }

}

export const recipeBook = new RecipeBook();