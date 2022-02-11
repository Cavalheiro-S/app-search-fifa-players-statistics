import React, { createContext, useState } from 'react';
import PlayerProps from "../interface/PlayerInterface";


interface PlayerContextProps{
    player: PlayerProps[];
    setPlayer: React.Dispatch<React.SetStateAction<PlayerProps[]>>;
}

export const PlayerContext = createContext<PlayerContextProps | null>(null);

export const PlayerProvider : React.FC = ({children}) => {

    const [player, setPlayer]= useState<PlayerProps[]>([]);
    

    return (
        <PlayerContext.Provider value={{player,setPlayer}}>
            {children}
        </PlayerContext.Provider>
    )
}