import React from "react";
import { pickDiffCards, IMG_URL } from "./helpers";

const CalcBlackJack = ()=> {
    // let card1, card2;
    const cards = pickDiffCards();
    let sum = 0;
    for (let card of cards){
        sum += Number(Object.values(card).join());
    }
    if (sum === 21){
        return (
            <>
            <div>
            {cards.map(el => (<img src = {`${IMG_URL}${Object.keys(el).join()}.png`}/>))}
            </div>
            <h2>Score: {sum}</h2>
            <h3>🧨🧨🧨BLACK JACK🧨🧨🧨</h3>
            </>
        )
    }
    return (
        <>
        <div>
        {cards.map(el => (<img src = {`${IMG_URL}${Object.keys(el).join()}.png`}/>))}
        </div>
        <h2>Score: {sum}</h2>
        </>
    )
}

export default CalcBlackJack;