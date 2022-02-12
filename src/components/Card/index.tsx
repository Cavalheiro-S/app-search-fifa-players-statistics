import { useState } from "react";
import ArenaEnum from "../../enums/arenaEnum";
import SelectEnum from "../../enums/selectEnum";
import Button from "../Button";
import Select from "../Select";
import Match from "../../model/Match";

interface FunctionProps {
    (event: React.FormEvent, match: Match): void
}

export interface CardProps {
    handleSubmit?: FunctionProps | undefined;
    handleClick?: Function | undefined;
    removeCard: Function;
    number: number;
}

export const Card = (props: CardProps) => {
    const [arena, setArena] = useState<ArenaEnum>(ArenaEnum.LiveArena);

    return (
        <div className="card">
            <h3 className="card__title">Jogo {props.number}</h3>
            <button onClick={event => props.removeCard(props.number)} className="card__button--remove">
                X
            </button>
            <form
                onSubmit={
                    event => props.handleSubmit ? props.handleSubmit(event, new Match(props.number)) : null
                }
                className="card__form">
                <Select id={`card${props.number}arena`} setArena={setArena} arena={arena} type={SelectEnum.normal} />
                <div className="select__players">
                    <Select id={`card${props.number}player1`} arena={arena} type={SelectEnum.player} />
                    <span className="select__span">X</span>
                    <Select id={`card${props.number}player2`} arena={arena} type={SelectEnum.player} />
                </div>
                <Button handleClick={props.handleClick} className="card__button" name="Enviar" />
            </form>
        </div>
    )
}
