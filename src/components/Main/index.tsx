import { useContext, useEffect, useState } from "react";
import Match from "../../model/Match";
import Button from "../Button";
import { Card } from "../Card";
import Header from "../Header";
import { ResultContext } from '../../context/ResultContext';
import Result from "../Result";
import Loading from "../Loading";

const Main = () => {

    const [cardTotal, setCardTotal] = useState<JSX.Element[]>([]);
    const [hasResult, setHasResult] = useState(false);
    const [hasLoading, setHasLoading] = useState(false);
    const resultContext = useContext(ResultContext);

    function addCard(number: number): void {
        setCardTotal([...cardTotal, <Card removeCard={removeCard} number={number} />]);
    }

    function removeCard(id: number): void {

        const newCardTotal = cardTotal.filter((card, index) => {

            if (index !== id) {

                return card;
            }
            return null;
        })
        setCardTotal(newCardTotal);
    }

    function resultMatch(event: React.FormEvent, match: Match): void {

        event.preventDefault();

        if (!match.testFields()) {
            setHasLoading(true)
            match.confrontResult()
                .then(result => {
                    resultContext?.setResult(result.data);
                    setHasResult(true);
                })
                .catch(result => {
                    alert(result.textResponse)

                })
                .finally(() => setHasLoading(false))
        }
        else {
            alert(match.testFields());
        }

    }

    return (
        <main className="main">
            <Header />
            <h1 className="main__title">
                Pesquise por jogadores
            </h1>
            <Button handleClick={addCard} name="Add Card" className="main__button" />
            <div className="main__cards">
                {cardTotal.map((card, index) => <Card removeCard={removeCard} key={index} handleSubmit={resultMatch} number={index} />)}
            </div>
            <div className="main__loading">
                {hasLoading ? <Loading /> : null}
            </div>
            {
                hasResult === true && cardTotal.length > 0 ? <Result/> : null
            }
        </main>
    )
}

export default Main