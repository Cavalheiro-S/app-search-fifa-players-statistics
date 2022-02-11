import { useState } from "react";
import Button from "../Button";
import { Card } from "../Card";
import Header from "../Header";
const Main = () => {

    const [cardTotal, setCardTotal] = useState<JSX.Element[]>([]);

    function addCard(number = 0) {
        setCardTotal([...cardTotal, <Card number={number} />]);
    }

    return (
        <main className="main">
            <Header />
            <Button handleClick={addCard} name="Add Card" className="main__button" />
            <div className="main__cards">
                {cardTotal.map((card, index) => <Card key={index} number={index} />)}
            </div>
        </main>
    )
}

export default Main