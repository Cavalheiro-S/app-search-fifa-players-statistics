import React from "react";
import { ConfrontResult } from '../model/Confront';

interface ResultProps{

    result: ConfrontResult | null,
    setResult: React.Dispatch<React.SetStateAction<ConfrontResult | null>>
}

export const ResultContext = React.createContext<ResultProps | null>(null);

export const ResultProvider: React.FC = ({children} ) => {

    const [result, setResult] = React.useState<ConfrontResult | null>(null);
    return(

        <ResultContext.Provider value={{result,setResult}}>
            {children}
        </ResultContext.Provider>
    )
}