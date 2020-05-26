import {items} from "./item";

class Potion {
    constructor(name, recipe, imageUrl){
        this.name = name;
        this.recipe = recipe.sort();
        this.imageUrl = imageUrl;
    }

}

const potion1 = new Potion("potion1", [items[0], items[1]], "./public/assets/Results/bottle1.png");
const potion2 = new Potion("potion2", [items[1], items[2]], "./public/assets/Results/bottle2.png");
const potion3 = new Potion("potion3", [items[2], items[3]], "./public/assets/Results/bottle3.png");
const potion4 = new Potion("potion4", [items[3], items[4]], "./public/assets/Results/bottle4.png");
const potion5 = new Potion("potion5", [items[4], items[5]], "./public/assets/Results/bottle5.png");
const potion6 = new Potion("potion6", [items[5], items[6]], "./public/assets/Results/bottle6.png");
const potion7 = new Potion("potion7", [items[6], items[7]], "./public/assets/Results/bottle7.png");
const potion8 = new Potion("potion8", [items[7], items[8]], "./public/assets/Results/bottle8.png");
const potion9 = new Potion("potion9", [items[8], items[9]], "./public/assets/Results/bottle9.png");
const potion10 = new Potion("potion10", [items[9], items[10]], "./public/assets/Results/bottle10.png");
const potion11 = new Potion("potion11", [items[10], items[11]], "./public/assets/Results/bottle11.png");
const potion12 = new Potion("potion12", [items[11], items[12]], "./public/assets/Results/bottle12.png");
const potion13 = new Potion("potion13", [items[12], items[13]], "./public/assets/Results/bottle13.png");
const potion14 = new Potion("potion14", [items[13], items[14]], "./public/assets/Results/bottle14.png");
const potion15 = new Potion("potion15", [items[14], items[15]], "./public/assets/Results/bottle15.png");
const potion16 = new Potion("potion16", [items[15], items[16]], "./public/assets/Results/bottle16.png");
const potion17 = new Potion("potion17", [items[16], items[17]], "./public/assets/Results/bottle17.png");
const potion18 = new Potion("potion18", [items[17], items[18]], "./public/assets/Results/bottle18.png");
const potion19 = new Potion("potion19", [items[18], items[19]], "./public/assets/Results/bottle19.png");
const potion20 = new Potion("potion20", [items[19], items[20]], "./public/assets/Results/bottle20.png");
const potion21 = new Potion("potion21", [items[20], items[21]], "./public/assets/Results/bottle21.png");
const potion22 = new Potion("potion22", [items[21], items[22]], "./public/assets/Results/bottle22.png");
const potion23 = new Potion("potion23", [items[22], items[23]], "./public/assets/Results/bottle23.png");
const potion24 = new Potion("potion24", [items[23], items[24]], "./public/assets/Results/bottle24.png");
const potion25 = new Potion("potion25", [items[24], items[25]], "./public/assets/Results/bottle25.png");
const potion26 = new Potion("potion26", [items[25], items[26]], "./public/assets/Results/bottle26.png");
const potion27 = new Potion("potion27", [items[26], items[27]], "./public/assets/Results/bottle27.png");
const potion28 = new Potion("potion28", [items[27], items[28]], "./public/assets/Results/bottle28.png");
const potion29 = new Potion("potion29", [items[28], items[29]], "./public/assets/Results/bottle29.png");
const potion30 = new Potion("potion30", [items[29], items[30]], "./public/assets/Results/bottle30.png");
const potion31 = new Potion("potion31", [items[30], items[31]], "./public/assets/Results/bottle31.png");
const potion32 = new Potion("potion32", [items[32], items[33]], "./public/assets/Results/bottle32.png");
const potion33 = new Potion("potion33", [items[33], items[34]], "./public/assets/Results/bottle33.png");
const potion34 = new Potion("potion34", [items[34], items[35]], "./public/assets/Results/bottle34.png");
const potion35 = new Potion("potion35", [items[35], items[36]], "./public/assets/Results/bottle35.png");
const potion36 = new Potion("potion36", [items[36], items[37]], "./public/assets/Results/bottle36.png");
const potion37 = new Potion("potion37", [items[37], items[38]], "./public/assets/Results/bottle37.png");
const potion38 = new Potion("potion38", [items[38], items[39]], "./public/assets/Results/bottle38.png");
const potion39 = new Potion("potion39", [items[39], items[0]], "./public/assets/Results/bottle39.png");
const potion40 = new Potion("potion40", [items[36], items[25]], "./public/assets/Results/bottle40.png");

export const recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8, 
    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37, 
    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,
    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,
    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40]