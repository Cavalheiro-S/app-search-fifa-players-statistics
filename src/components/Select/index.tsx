import SelectEnum from "../../enums/selectEnum"
import SelectPlayers from "./SelectPlayers";
import ArenaEnum from '../../enums/arenaEnum';
import React from "react";

interface SelectProps {
    id:string;
    className?: string;
    arena: ArenaEnum;
    setArena?: React.Dispatch<React.SetStateAction<ArenaEnum>>;
    type: SelectEnum;
}

const Select = (props: SelectProps) => {

    function typeSelect() {

        if (props.type === "player") {
            return (
                <SelectPlayers name="player1" id={props.id} arena={props.arena} />
            )
        }
        return (
            <select
                onChange={event => {
                    if(props.setArena !== undefined){
                        props.setArena(event.target.value as ArenaEnum)
                    }
                }}
                value={props.arena}
                required
                className={`select ${props?.className}`}
                name="arena"
                id={props.id}>
                <option value={ArenaEnum.EsoccerBattle}>{ArenaEnum.EsoccerBattle}</option>
                <option value={ArenaEnum.EsoccerLigaChalenger}>{ArenaEnum.EsoccerLigaChalenger}</option>
                <option value={ArenaEnum.LiveArena}>{ArenaEnum.LiveArena}</option>

            </select>
        )

    }

    return (
        typeSelect()
    )
}

export default Select