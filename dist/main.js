/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _recipes_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes-list */ \"./src/recipes-list.js\");\n/* harmony import */ var _pot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pot */ \"./src/pot.js\");\n/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe */ \"./src/recipe.js\");\n// console.log(\"Webpack is working!\");\n\n\n\n\n \n\n//Game container\nconst game = document.createElement(\"div\");\ngame.setAttribute(\"class\", \"game-container\");\n\ndocument.body.appendChild(game);\n\n//Items menu-container\nconst menuContainer =  document.createElement(\"div\");\nmenuContainer.setAttribute(\"class\", \"items-menu-container\");\ngame.appendChild(menuContainer);\n\n//Items list\nconst menuList = document.createElement(\"div\");\nmenuList.setAttribute(\"class\", \"items-menu\");\nmenuContainer.appendChild(menuList);\nmenuList.addEventListener(\"click\", function(event){\n    if (event.target.alt) _pot__WEBPACK_IMPORTED_MODULE_2__[\"pots\"].addItem(event.target.alt);\n    // console.log(pots.ingredients);\n});\n\n//Items\n\n\n_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"].forEach(ele =>{\n    const image = createElement(\"image\", \"img\", \"image\", menuList);\n    image.setAttribute(\"src\", ele.imageUrl);\n    image.setAttribute(\"alt\", `${ele.name}`);\n});\n\n//Pot\nconst pot = document.createElement(\"div\");\npot.setAttribute(\"class\", \"pot\");\ngame.appendChild(pot);\n\n//Recipe Book\nconst book = document.createElement(\"div\");\nbook.setAttribute(\"class\", \"recipe-book\");\ngame.appendChild(book);\n\n_recipes_list__WEBPACK_IMPORTED_MODULE_1__[\"recipes\"].forEach(ele=>{\n    const potionContainer = createElement(\"potion-container\", \"div\", \"potion-container\", book);\n    const potion = createElement(\"potion\", \"img\", \"potion\", potionContainer);\n    potion.setAttribute(\"src\", `${ele.imageUrl}`);\n    potion.setAttribute(\"alt\", `${ele.name}`);\n    const ingredients = createElement(\"ingredients\", \"div\", \"ingredients\", potionContainer);\n    ele.recipe.forEach(el=>{\n        const ingredient = createElement(\"ingredient\", \"img\", \"ingredient\", ingredients);\n        ingredient.setAttribute(\"src\", `${el.imageUrl}`);\n\n    });\n});\n\nbook.addEventListener(\"click\", function (event) {\n//    console.log(event.target);\n});\n\n//Button\nconst button = createElement(\"button\", \"button\", \"submit-button\", pot);\nbutton.setAttribute(\"type\", \"submit\");\nbutton.innerHTML = \"Stir stuff\";\nbutton.addEventListener(\"click\", function(event){\n    _recipe__WEBPACK_IMPORTED_MODULE_3__[\"recipeBook\"].addRecipe(_pot__WEBPACK_IMPORTED_MODULE_2__[\"pots\"].ingredients);\n    _pot__WEBPACK_IMPORTED_MODULE_2__[\"pots\"].emptyPot();\n});\n\nconst clearButton = createElement(\"button\", \"button\", \"clear-button\", pot);\nclearButton.setAttribute(\"type\", \"submit\");\nclearButton.innerHTML = \"Empty pot\";\nclearButton.addEventListener(\"click\", function(){\n    _pot__WEBPACK_IMPORTED_MODULE_2__[\"pots\"].emptyPot();\n});\n\n\n\n//Creator Function\nfunction createElement(name, elm, att, parent) {\n    name = document.createElement(`${elm}`);\n    name.setAttribute(\"class\", `${att}`);\n    parent.appendChild(name);\n    return name;\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\n\n\nclass Item {\n    constructor(name, type, imageUrl) {\n        this.name = name;\n        this.type = type;\n        this.imageUrl = imageUrl;\n    }\n\n}\n\n\nconst grapes = new Item(\"Grapes\", \"fruit\", \"./public/assets/Ingredients/berrys1.png\");\nconst cranberries = new Item(\"Cranberries\", \"fruit\", \"./public/assets/Ingredients/berrys2.png\");\nconst bone = new Item(\"Bone\", \"animal\", \"./public/assets/Ingredients/bone.png\");\nconst iceButterfly = new Item(\"Ice Butterfly \", \"animal\", \"./public/assets/Ingredients/butterfly_wing1.png\");\nconst fireButterfly = new Item(\"Fire Butterfly\", \"animal\", \"./public/assets/Ingredients/butterfly_wing2.png\");\nconst cotton = new Item(\"Cotton\", \"flower\", \"./public/assets/Ingredients/cotton.png\");\nconst ametyst = new Item(\"Ametyst\", \"rock\", \"./public/assets/Ingredients/crystal1.png\");\nconst quartz = new Item(\"Quartz\", \"rock\", \"./public/assets/Ingredients/crystal2.png\");\nconst roe = new Item(\"Roe\", \"animal\", \"./public/assets/Ingredients/eggs.png\");\nconst feather = new Item(\"Feather\", \"animal\", \"./public/assets/Ingredients/feather.png\");\nconst daisy = new Item(\"Daisy\", \"flower\", \"./public/assets/Ingredients/flower1.png\");\nconst fireFlower = new Item(\"Fire Flower\", \"flower\", \"./public/assets/Ingredients/flower2.png\");\nconst rose = new Item(\"Rose\", \"flower\", \"./public/assets/Ingredients/flower3.png\");\nconst blazingStar = new Item(\"Blazing star\", \"flower\", \"./public/assets/Ingredients/flower4.png\");\nconst redAester = new Item(\"Red aester\", \"flower\", \"./public/assets/Ingredients/flower5.png\");\nconst tulip = new Item(\"Tulip\", \"flower\", \"./public/assets/Ingredients/flower6.png\");\nconst iris = new Item(\"Iris\", \"flower\", \"./public/assets/Ingredients/flower7.png\");\nconst blueHeart = new Item(\"Blue bleading heart\", \"flower\", \"./public/assets/Ingredients/flower8.png\");\nconst trailing = new Item(\"Trailing abutilon\", \"flower\", \"./public/assets/Ingredients/flower9.png\");\nconst lilly = new Item(\"Lilly of the Valley\", \"flower\", \"./public/assets/Ingredients/flower10.png\");\nconst wheat = new Item(\"Wheat\", \"grain\", \"./public/assets/Ingredients/grass.png\");\nconst mint = new Item(\"Mint\", \"herb\", \"./public/assets/Ingredients/leaf1.png\");\nconst nettle = new Item(\"Nettle\", \"herb\", \"./public/assets/Ingredients/leaf2.png\");\nconst black = new Item(\"Black gum\", \"herb\", \"./public/assets/Ingredients/leaf3.png\");\nconst hawthorn = new Item(\"Hawthorn\", \"herb\", \"./public/assets/Ingredients/leaf4.png\");\nconst raspberry = new Item(\"Raspberry leaf\", \"herb\", \"./public/assets/Ingredients/leaf5.png\");\nconst maple = new Item(\"Maple leaf\", \"herb\", \"./public/assets/Ingredients/leaf6.png\");\nconst ivy = new Item(\"Ivy leaf\", \"herb\", \"./public/assets/Ingredients/leaf7.png\");\nconst rosebud = new Item(\"Rosebud cordyline\", \"herb\", \"./public/assets/Ingredients/leaf8.png\");\nconst helly = new Item(\"Helly\", \"herb\", \"./public/assets/Ingredients/leaf9.png\");\nconst fern = new Item(\"Fern\", \"herb\", \"./public/assets/Ingredients/leaf10.png\");\nconst por = new Item(\"Porcini mushroom\", \"mushroom\", \"./public/assets/Ingredients/mushroom1.png\");\nconst rosy = new Item(\"Rosy mushroom\", \"mushroom\", \"./public/assets/Ingredients/mushroom2.png\");\nconst amanita = new Item(\"Amanita mushroom\", \"mushroom\", \"./public/assets/Ingredients/mushroom3.png\");\nconst magic = new Item(\"Magic mushrooms\", \"mushroom\", \"./public/assets/Ingredients/mushroom4.png\");\nconst blue = new Item(\"Blue milk mushroom\", \"mushroom\", \"./public/assets/Ingredients/mushroom5.png\");\nconst magicPod = new Item(\"Magic beans\", \"fruit\", \"./public/assets/Ingredients/pod.png\");\nconst dragon = new Item(\"Dragon scales\", \"animal\", \"./public/assets/Ingredients/scales.png\");\nconst  wood = new Item(\"Treant fingers\", \"flower\", \"./public/assets/Ingredients/wood1.png\");\nconst lumber = new Item(\"Lumber\", \"flower\", \"./public/assets/Ingredients/wood2.png\");\n\n\nconst items = [grapes, cranberries, bone, blazingStar, blueHeart, iceButterfly,\n     fireButterfly, fireFlower, cotton, ametyst, quartz, roe, feather, daisy, \n    rose, redAester, tulip, iris, trailing, lilly, wheat, mint, nettle, black,\n    hawthorn, raspberry,magic, maple, ivy, rosebud, helly, fern, por, rosy, amanita,\n    blue, magicPod, dragon, wood, lumber ];\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/pot.js":
/*!********************!*\
  !*** ./src/pot.js ***!
  \********************/
/*! exports provided: pots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pots\", function() { return pots; });\nclass Pot{\n    constructor(){\n        this.size = 4;\n        this.ingredients = [];\n\n    }\n\n    emptyPot(){\n        this.ingredients = [];\n    }\n\n    addItem(item){\n        if (this.size === this.ingredients.length){\n            console.log(\"Too much stuff!\");\n        }else{\n            this.ingredients.push(item);\n        }\n    }\n\n\n}\n\nconst pots = new Pot();\n\n//# sourceURL=webpack:///./src/pot.js?");

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: recipeBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recipeBook\", function() { return recipeBook; });\n/* harmony import */ var _recipes_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes-list */ \"./src/recipes-list.js\");\n\nclass RecipeBook {\n    constructor(){\n        this.contents = {};\n    }\n\n    addRecipe(input){\n        let name;\n        _recipes_list__WEBPACK_IMPORTED_MODULE_0__[\"recipes\"].forEach(recipe => {\n            \n            if (JSON.stringify(input.sort()) === JSON.stringify(recipe.ingredients)) {\n                name = recipe.name;\n                this.contents[name] = input;\n            }\n\n        });\n        return `${name}: ${input}`;\n    }\n\n    aRecipe(input){\n        if (this.checkRecipe(input)){\n            if (!Object.values(this.contents).includes(input)) {\n                console.log(Object.keys(RECIPES).find(key => RECIPES[key] === input));\n                let name = Object.keys(RECIPES).find(key => RECIPES[key] === input);\n                this.contents[name] = input;\n            }\n            \n        }\n    }\n\n}\n\nconst recipeBook = new RecipeBook();\n\n//# sourceURL=webpack:///./src/recipe.js?");

/***/ }),

/***/ "./src/recipes-list.js":
/*!*****************************!*\
  !*** ./src/recipes-list.js ***!
  \*****************************/
/*! exports provided: recipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recipes\", function() { return recipes; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\nclass Potion {\n    constructor(name, recipe, imageUrl){\n        this.name = name;\n        this.recipe = recipe.sort();\n        this.imageUrl = imageUrl;\n    }\n\n}\n\nconst potion1 = new Potion(\"potion1\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][0], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][1]], \"./public/assets/Results/bottle1.png\");\nconst potion2 = new Potion(\"potion2\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][1], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][2]], \"./public/assets/Results/bottle2.png\");\nconst potion3 = new Potion(\"potion3\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][2], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][3]], \"./public/assets/Results/bottle3.png\");\nconst potion4 = new Potion(\"potion4\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][3], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][4]], \"./public/assets/Results/bottle4.png\");\nconst potion5 = new Potion(\"potion5\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][4], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][5]], \"./public/assets/Results/bottle5.png\");\nconst potion6 = new Potion(\"potion6\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][5], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][6]], \"./public/assets/Results/bottle6.png\");\nconst potion7 = new Potion(\"potion7\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][6], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][7]], \"./public/assets/Results/bottle7.png\");\nconst potion8 = new Potion(\"potion8\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][7], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][8]], \"./public/assets/Results/bottle8.png\");\nconst potion9 = new Potion(\"potion9\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][8], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][9]], \"./public/assets/Results/bottle9.png\");\nconst potion10 = new Potion(\"potion10\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][9], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][10]], \"./public/assets/Results/bottle10.png\");\nconst potion11 = new Potion(\"potion11\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][10], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][11]], \"./public/assets/Results/bottle11.png\");\nconst potion12 = new Potion(\"potion12\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][11], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][12]], \"./public/assets/Results/bottle12.png\");\nconst potion13 = new Potion(\"potion13\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][12], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][13]], \"./public/assets/Results/bottle13.png\");\nconst potion14 = new Potion(\"potion14\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][13], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][14]], \"./public/assets/Results/bottle14.png\");\nconst potion15 = new Potion(\"potion15\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][14], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][15]], \"./public/assets/Results/bottle15.png\");\nconst potion16 = new Potion(\"potion16\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][15], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][16]], \"./public/assets/Results/bottle16.png\");\nconst potion17 = new Potion(\"potion17\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][16], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][17]], \"./public/assets/Results/bottle17.png\");\nconst potion18 = new Potion(\"potion18\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][17], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][18]], \"./public/assets/Results/bottle18.png\");\nconst potion19 = new Potion(\"potion19\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][18], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][19]], \"./public/assets/Results/bottle19.png\");\nconst potion20 = new Potion(\"potion20\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][19], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][20]], \"./public/assets/Results/bottle20.png\");\nconst potion21 = new Potion(\"potion21\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][20], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][21]], \"./public/assets/Results/bottle21.png\");\nconst potion22 = new Potion(\"potion22\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][21], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][22]], \"./public/assets/Results/bottle22.png\");\nconst potion23 = new Potion(\"potion23\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][22], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][23]], \"./public/assets/Results/bottle23.png\");\nconst potion24 = new Potion(\"potion24\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][23], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][24]], \"./public/assets/Results/bottle24.png\");\nconst potion25 = new Potion(\"potion25\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][24], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][25]], \"./public/assets/Results/bottle25.png\");\nconst potion26 = new Potion(\"potion26\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][25], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][26]], \"./public/assets/Results/bottle26.png\");\nconst potion27 = new Potion(\"potion27\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][26], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][27]], \"./public/assets/Results/bottle27.png\");\nconst potion28 = new Potion(\"potion28\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][27], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][28]], \"./public/assets/Results/bottle28.png\");\nconst potion29 = new Potion(\"potion29\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][28], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][29]], \"./public/assets/Results/bottle29.png\");\nconst potion30 = new Potion(\"potion30\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][29], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][30]], \"./public/assets/Results/bottle30.png\");\nconst potion31 = new Potion(\"potion31\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][30], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][31]], \"./public/assets/Results/bottle31.png\");\nconst potion32 = new Potion(\"potion32\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][32], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][33]], \"./public/assets/Results/bottle32.png\");\nconst potion33 = new Potion(\"potion33\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][33], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][34]], \"./public/assets/Results/bottle33.png\");\nconst potion34 = new Potion(\"potion34\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][34], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][35]], \"./public/assets/Results/bottle34.png\");\nconst potion35 = new Potion(\"potion35\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][35], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][36]], \"./public/assets/Results/bottle35.png\");\nconst potion36 = new Potion(\"potion36\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][36], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][37]], \"./public/assets/Results/bottle36.png\");\nconst potion37 = new Potion(\"potion37\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][37], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][38]], \"./public/assets/Results/bottle37.png\");\nconst potion38 = new Potion(\"potion38\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][38], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][39]], \"./public/assets/Results/bottle38.png\");\nconst potion39 = new Potion(\"potion39\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][39], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][0]], \"./public/assets/Results/bottle39.png\");\nconst potion40 = new Potion(\"potion40\", [_item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][36], _item__WEBPACK_IMPORTED_MODULE_0__[\"items\"][25]], \"./public/assets/Results/bottle40.png\");\n\nconst recipes = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8, \n    potion9, potion13, potion17, potion21, potion25, potion29, potion33, potion37, \n    potion10, potion14, potion18, potion22, potion26, potion30, potion34, potion38,\n    potion11, potion15, potion19, potion23, potion27, potion31, potion35, potion39,\n    potion12, potion16, potion20, potion24, potion28, potion32, potion36, potion40];\n\n//# sourceURL=webpack:///./src/recipes-list.js?");

/***/ })

/******/ });