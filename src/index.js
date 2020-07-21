// console.log("Webpack is working!");
import {items} from "./item";
import {recipes} from "./recipes-list";
import { pots } from "./pot";
import {recipeBook} from "./recipe";
 

//Game container
const game = document.createElement("div");
game.setAttribute("class", "game-container");

document.body.appendChild(game);

//Recipe Book
const bookContainer = document.createElement("div");
bookContainer.setAttribute("class", "recipe-book-container");
game.appendChild(bookContainer);

const book = document.createElement("div");
book.setAttribute("class", "recipe-book");
bookContainer.appendChild(book);

recipes.forEach(ele => {
    const potionContainer = createElement("potion-container", "div", "potion-container", book);
    potionContainer.setAttribute("id", `${ele.name}`);
    potionContainer.hidden = true;
    const potion = createElement("potion", "img", "potion", potionContainer);
    potion.setAttribute("src", `${ele.imageUrl}`);
    potion.setAttribute("alt", `${ele.name}`);
    const ingredients = createElement("ingredients", "div", "ingredients", potionContainer);
    ele.recipe.forEach(el => {
        const ingredient = createElement("ingredient", "img", "ingredient", ingredients);
        ingredient.setAttribute("src", `${el.imageUrl}`);

    });
});

book.addEventListener("click", function (event) {
    console.log(event.target);
});


//Pot
const potContainer = createElement("pot-containter", "div", "pot-container", game);


const pot = document.createElement("div");
pot.setAttribute("class", "pot");

potContainer.appendChild(pot);
// pots.ingredients.forEach(ele => {
//         let added = createElement("added", "div", "added", pot);
//         added.innerHTML = "heey";

//     console.log(ele);
// })



//Items menu-container
const menuContainer =  document.createElement("div");
menuContainer.setAttribute("class", "items-menu-container");
game.appendChild(menuContainer);

//Items list
const menuList = document.createElement("div");
menuList.setAttribute("class", "items-menu");
menuContainer.appendChild(menuList);
menuList.addEventListener("click", function(event){
    if (event.target.alt) {
        let item = event.target.alt;
        let found = items.find(function(ele) {
            return ele.name === item;
        });
        if (pots.size === pots.ingredients.length){
            console.log("Too much stuff!");
        } else{
            pots.addItem(found);
            let added = createElement("added", "img", "added", pot);
            added.setAttribute("src", found.imageUrl);
            added.setAttribute("alt", `${found.name}`);
        }
       
    };
        
        console.log(pots.ingredients);
});

//Items

items.forEach(ele =>{
    const image = createElement("image", "img", "image", menuList);
    image.setAttribute("src", ele.imageUrl);
    image.setAttribute("alt", `${ele.name}`);
});







//Button
const stirButton = createElement("button", "button", "submit-button", potContainer);
stirButton.setAttribute("type", "submit");
stirButton.innerHTML = "Stir the pot";
stirButton.addEventListener("click", function(event){
    let names = [];
    pots.ingredients.forEach(ingredient=>{
        names.push(ingredient.name);
    });
    let found = recipeBook.checkRecipe(names);
    if (found){
        document.getElementById(found).hidden = false;
    }else{
        const errorDiv = createElement("err", "div", "err", game);
        const reminder = createElement("rem", "div", "rem", errorDiv);

        reminder.innerHTML = "That is not a potion!" + "<br />" + "Please remember that: "
            + "<br />" + "* Ingredients that mix successfully are never stored on the same shelf or on consequequent shelves."
            + "<br />" + "* One potion's ingredients are also not stored vertically above each other."
            + "<br />" + "Good luck!";

        const againButton = createElement("button", "button", "a-button", errorDiv);
        againButton.innerHTML = "Resume game";
        againButton.addEventListener("click", function () {
            errorDiv.hidden = true;
        })


    }

    pots.emptyPot();
    let ingredients = document.getElementsByClassName("added");

    while (ingredients.length > 0) {
        ingredients[0].parentNode.removeChild(ingredients[0]);

    }


});

const clearButton = createElement("button", "button", "clear-button", potContainer);
clearButton.setAttribute("type", "submit");
clearButton.innerHTML = "Empty pot";
clearButton.addEventListener("click", function(){
    pots.emptyPot();
    let ingredients = document.getElementsByClassName("added");

    while (ingredients.length > 0) {
        ingredients[0].parentNode.removeChild(ingredients[0]);
    }
});

const instructions = createElement("instr", "div", "instr", game);
const paragraph = createElement("par", "div", "par", instructions);

paragraph.innerHTML = "Welcome to potion mater!" + "<br />" + "You have 40 mystery potions that can be obtained by mixing different ingredients." 
    + "<br />" + "Ingredients that mix successfully are never stored on the same shelf or on consequequent shelves." 
    + "<br />" + "One potion's ingredients are also not stored vertically above each other." + "<br />" + "Try to see how many you can create" 
    + "<br />" + "Good luck!" ;

const inButton = createElement("button", "button", "in-button", instructions);
inButton.innerHTML = "Play";
inButton.addEventListener("click", function(){
    instructions.hidden = true;
})

//Creator Function
function createElement(name, elm, att, parent) {
    name = document.createElement(`${elm}`);
    name.setAttribute("class", `${att}`);
    parent.appendChild(name);
    return name;
}



