import axios from "axios";
import { ConfrontResult } from '../model/Confront';

export interface responseProps {
    textResponse: string;
    data : ConfrontResult | null;
} 

class MatchController {
    player1: string | undefined;
    player2: string | undefined;
    arena: string | undefined;

    constructor(player1: string | undefined, player2: string | undefined, arena: string | undefined) {

        this.player1 = player1;
        this.player2 = player2;
        this.arena = arena;
    }

    playersConfront() : Promise<responseProps> {

        const URL = `https://eugreen.herokuapp.com/get_x1?playerA=${this.player1}&playerB=${this.player2}&uid=`;
        
        return new Promise<responseProps>(async (resolve , reject) => {
            const confrontResult = await axios.get<ConfrontResult>(URL)
            if (confrontResult.data.last_games.length === 0) {
                reject({
                    textResponse: "Nenhum jogo encontrado",
                    data: null
                });
            }
            
            resolve({
                textResponse: "",
                data: confrontResult.data
            })
        })
    }


    verifyInputs () : boolean{

        if(this.player1 === this.player2){
            return false
        }

        return true
    }
}

export default MatchController;