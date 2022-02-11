import ArenaEnum from "../../enums/arenaEnum";
import SelectEnum from "../../enums/selectEnum";
import Button from "../Button";
import Select from "../Select";
import Match from "../../model/Match";

export interface CardProps {
    number: number
}

export const Card = (props: CardProps) => {

    function resultPlayer(event: React.FormEvent) {

        event.preventDefault();
        const match = new Match(props.number);
        match.confrontResult();
    }
    return (
        <div className="card">
            <h3 className="card__title">Jogo {props.number}</h3>
            <form className="card__form" action="">
                <Select id={`card${props.number}arena`} arena={ArenaEnum.LiveArena} type={SelectEnum.normal} />
                <div className="select__players">
                    <Select id={`card${props.number}player1`} arena={ArenaEnum.LiveArena} type={SelectEnum.player} />
                    <span className="select__span">X</span>
                    <Select id={`card${props.number}player2`} arena={ArenaEnum.LiveArena} type={SelectEnum.player} />
                </div>
                <Button handleClick={resultPlayer} className="card__button" name="Enviar" />
            </form>
        </div>
    )
}
