import randomCard from "./randomCard";
const IMG_URL = " https://deckofcardsapi.com/static/img/";

const numValues = [{'A' : 11}, {'2' : 2} ,{'3' : 3} ,{'4' : 4} ,{'5' : 5} ,{'6' : 6} ,{'7' : 7} ,
{'8' : 8}, {'9' : 9} ,{'10' : 10} , {'J' : 10} , {'Q' : 10} , {'K' : 10}];

const pickDiffCards = ()=> {
    const obj1 = {};
    const obj2 = {};
    const [ranCard1, value1] = randomCard();
    const [ranCard2, value2] = randomCard();
    if (ranCard1 !== ranCard2){
        obj1[ranCard1] = value1;
        obj2[ranCard2] = value2;
        return [obj1, obj2]
}
}

export {IMG_URL, numValues, pickDiffCards} ;