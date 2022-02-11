import SelectEnum from "../../enums/selectEnum"
import SelectPlayers from "./SelectPlayers";
import ArenaEnum from "../../enums/arenaEnum";

interface SelectProps {
    id:string;
    className?: string;
    arena: ArenaEnum;
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
                className={`select ${props?.className}`}
                name="arena"
                id={props.id}>
                <option value="Esoccer Battle - 8 mins play">Esoccer Battle - 8 mins play</option>
                <option value="Esoccer Liga Pro Challenger - 8 mins play">Esoccer Liga Pro Challenger - 8 mins play</option>
                <option value="Esoccer Liga Pro - 8 mins play">Esoccer Liga Pro - 8 mins play</option>
                <option value="Live Arena - 10 mins play">Live Arena - 10 mins play</option>

            </select>
        )

    }

    return (
        typeSelect()
    )
}

export default Select