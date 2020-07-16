 class Item {
    constructor(name, type, imageUrl) {
        this.name = name;
        this.type = type;
        this.imageUrl = imageUrl;
    }

}

const grapes = new Item("Grapes", "fruit", "./public/assets/Ingredients/berrys1.png");
const cranberries = new Item("Cranberries", "fruit", "./public/assets/Ingredients/berrys2.png");
const bone = new Item("Bone", "animal", "./public/assets/Ingredients/bone.png");
const iceButterfly = new Item("Ice Butterfly ", "animal", "./public/assets/Ingredients/butterfly_wing1.png");
const fireButterfly = new Item("Fire Butterfly", "animal", "./public/assets/Ingredients/butterfly_wing2.png");
const cotton = new Item("Cotton", "flower", "./public/assets/Ingredients/cotton.png");
const ametyst = new Item("Ametyst", "rock", "./public/assets/Ingredients/crystal1.png");
const quartz = new Item("Quartz", "rock", "./public/assets/Ingredients/crystal2.png");
const roe = new Item("Roe", "animal", "./public/assets/Ingredients/eggs.png");
const feather = new Item("Feather", "animal", "./public/assets/Ingredients/feather.png");
const daisy = new Item("Daisy", "flower", "./public/assets/Ingredients/flower1.png");
const fireFlower = new Item("Fire Flower", "flower", "./public/assets/Ingredients/flower2.png");
const rose = new Item("Rose", "flower", "./public/assets/Ingredients/flower3.png");
const blazingStar = new Item("Blazing star", "flower", "./public/assets/Ingredients/flower4.png");
const redAester = new Item("Red aester", "flower", "./public/assets/Ingredients/flower5.png");
const tulip = new Item("Tulip", "flower", "./public/assets/Ingredients/flower6.png");
const iris = new Item("Iris", "flower", "./public/assets/Ingredients/flower7.png");
const blueHeart = new Item("Blue bleading heart", "flower", "./public/assets/Ingredients/flower8.png");
const trailing = new Item("Trailing abutilon", "flower", "./public/assets/Ingredients/flower9.png");
const lilly = new Item("Lilly of the Valley", "flower", "./public/assets/Ingredients/flower10.png");
const wheat = new Item("Wheat", "grain", "./public/assets/Ingredients/grass.png");
const mint = new Item("Mint", "herb", "./public/assets/Ingredients/leaf1.png");
const nettle = new Item("Nettle", "herb", "./public/assets/Ingredients/leaf2.png");
const black = new Item("Black gum", "herb", "./public/assets/Ingredients/leaf3.png");
const hawthorn = new Item("Hawthorn", "herb", "./public/assets/Ingredients/leaf4.png");
const raspberry = new Item("Raspberry leaf", "herb", "./public/assets/Ingredients/leaf5.png");
const maple = new Item("Maple leaf", "herb", "./public/assets/Ingredients/leaf6.png");
const ivy = new Item("Ivy leaf", "herb", "./public/assets/Ingredients/leaf7.png");
const rosebud = new Item("Rosebud cordyline", "herb", "./public/assets/Ingredients/leaf8.png");
const helly = new Item("Helly", "herb", "./public/assets/Ingredients/leaf9.png");
const fern = new Item("Fern", "herb", "./public/assets/Ingredients/leaf10.png");
const por = new Item("Porcini mushroom", "mushroom", "./public/assets/Ingredients/mushroom1.png");
const rosy = new Item("Rosy mushroom", "mushroom", "./public/assets/Ingredients/mushroom2.png");
const amanita = new Item("Amanita mushroom", "mushroom", "./public/assets/Ingredients/mushroom3.png");
const magic = new Item("Magic mushrooms", "mushroom", "./public/assets/Ingredients/mushroom4.png");
const blue = new Item("Blue milk mushroom", "mushroom", "./public/assets/Ingredients/mushroom5.png");
const magicPod = new Item("Magic beans", "fruit", "./public/assets/Ingredients/pod.png");
const dragon = new Item("Dragon scales", "animal", "./public/assets/Ingredients/scales.png");
const  wood = new Item("Treant fingers", "flower", "./public/assets/Ingredients/wood1.png");
const lumber = new Item("Lumber", "flower", "./public/assets/Ingredients/wood2.png");

export const items = [
    bone, cotton, daisy, lilly, amanita, //0-4
    feather, iris, wheat, raspberry, rosy, //5-9
    fireButterfly, fireFlower, roe, maple, ivy, //10-14
    rosebud, trailing, redAester, rose, cranberries, //15-19
    mint, magicPod, nettle, fern, hawthorn, //20-24
    helly, black, blueHeart, quartz, magic, //25-29
    iceButterfly, dragon, blue, tulip, grapes, //30-34
    blazingStar,  ametyst, por, wood, lumber ]; //35 -39
