import { numValues } from "./helpers";
const randomCard = ()=>{
    const numArr = numValues;
    const cardArr = ["S", "C", "H", "D"];
    let ranSelect = numArr[Math.floor(Math.random() * numArr.length)];
    let value = Number(Object.values(ranSelect).join());
    let ranNum = Object.keys(ranSelect).join();
    let ranSuit = cardArr[Math.floor(Math.random() * cardArr.length)];
    let cardNum = ranNum + ranSuit;
    return [cardNum, value];
}

export default randomCard;