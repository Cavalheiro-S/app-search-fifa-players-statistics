import React from "react";
import axios from "axios";
import ArenaEnum from "../../../enums/arenaEnum";
import PlayerProps from "../../../interface/PlayerInterface";
import { PlayerContext } from '../../../context/PlayerContext';

interface SelectPlayersProps {
    name: string;
    arena?: ArenaEnum;
    id: string;

}

const SelectPlayers = (props: SelectPlayersProps) => {

    const playersContext = React.useContext(PlayerContext);

    return (
        <select
            className="select"
            name={props.name}
            id={props.id}
            onFocus={event => {

                const url = `https://eugreen.herokuapp.com/getPlayers?league=${props.arena}`;
                axios.get<PlayerProps[]>(url).then(players => {
                    if (players.data !== playersContext?.player) {
                        playersContext?.setPlayer(players.data)
                    }
                })

            }}>
            {playersContext?.player?.map(player => {
                return <option key={player.value} value={player.label}>{player.label}</option>
            })}
        </select>
    )
}

export default SelectPlayers