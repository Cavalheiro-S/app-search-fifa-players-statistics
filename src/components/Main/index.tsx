import { useContext, useState } from "react";
import Match from "../../model/Match";
import Button from "../Button";
import { Card } from "../Card";
import Header from "../Header";
import { ResultContext } from '../../context/ResultContext';
import { ConfrontResult } from '../../model/Confront';
import Result from "../Result";

const Main = () => {

    const [cardTotal, setCardTotal] = useState<JSX.Element[]>([]);
    const resultContext = useContext(ResultContext);

    function addCard(number = 0) {
        setCardTotal([...cardTotal, <Card number={number} />]);
    }

    function resultPlayer(event: React.FormEvent, match: Match): void {

        event.preventDefault();
        if (match.testFields()) {
            match.confrontResult()
            .then( result => {
                resultContext?.setResult(result.data);
                console.log(result.data);
            })
            .catch(result => {
                alert(result.textResponse)
                
            })
        }

    }

    return (
        <main className="main">
            <Header />
            <Button handleClick={addCard} name="Add Card" className="main__button" />
            <div className="main__cards">
                {cardTotal.map((card, index) => <Card key={index} handleSubmit={resultPlayer} number={index} />)}
            </div>
            <Result/>
        </main>
    )
}

export default Main