console.log("Webpack is working!");
import {items} from "./item";
import {recipes} from "./recipes-list";
import { pots } from "./pot";
import {recipeBook} from "./recipe";
 

//Game container
const game = document.createElement("div");
game.setAttribute("class", "game-container");

document.body.appendChild(game);

//Items menu-container
const menuContainer =  document.createElement("div");
menuContainer.setAttribute("class", "items-menu-container");
game.appendChild(menuContainer);

//Items list
const menuList = document.createElement("div");
menuList.setAttribute("class", "items-menu");
menuContainer.appendChild(menuList);
menuList.addEventListener("click", function(event){
    if (event.target.alt) pots.addItem(event.target.alt);
    // console.log(pots.ingredients);
});

//Items


items.forEach(ele =>{
    const image = createElement("image", "img", "image", menuList);
    image.setAttribute("src", ele.imageUrl);
    image.setAttribute("alt", `${ele.name}`);
})

//Pot
const pot = document.createElement("div");
pot.setAttribute("class", "pot");
game.appendChild(pot);

//Recipe Book
const book = document.createElement("div");
book.setAttribute("class", "recipe-book");
game.appendChild(book);

recipes.forEach(ele=>{
    const potionContainer = createElement("potion-container", "div", "potion-container", book);
    const potion = createElement("potion", "img", "potion", potionContainer);
    potion.setAttribute("src", `${ele.imageUrl}`);
    potion.setAttribute("alt", `${ele.name}`);
    const ingredients = createElement("ingredients", "div", "ingredients", potionContainer);
    ele.recipe.forEach(el=>{
        const ingredient = createElement("ingredient", "img", "ingredient", ingredients);
        ingredient.setAttribute("src", `${el.imageUrl}`);

    });
});

book.addEventListener("click", function (event) {
//    console.log(event.target);
});

//Button
const button = createElement("button", "button", "submit-button", pot);
button.setAttribute("type", "submit");
button.innerHTML = "Stir stuff";
button.addEventListener("click", function(event){
    recipeBook.addRecipe(pots.ingredients);
    pots.emptyPot();
});

const clearButton = createElement("button", "button", "clear-button", pot);
clearButton.setAttribute("type", "submit");
clearButton.innerHTML = "Empty pot";
clearButton.addEventListener("click", function(){
    pots.emptyPot();
});



//Creator Function
function createElement(name, elm, att, parent) {
    name = document.createElement(`${elm}`);
    name.setAttribute("class", `${att}`);
    parent.appendChild(name);
    return name;
}
