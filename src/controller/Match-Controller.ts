import axios from "axios";
import { ConfrontResult } from '../model/Confront';


class MatchController {
    player1: string | undefined;
    player2: string | undefined;
    arena: string | undefined;

    constructor(player1: string | undefined, player2: string | undefined, arena: string | undefined) {

        this.player1 = player1;
        this.player2 = player2;
        this.arena = arena;
    }

    playersConfront(): void {
        if (this.player1 === this.player2) {
            alert("Os jogadores não podem ser os mesmos")
        } else {
            const URL = `https://eugreen.herokuapp.com/get_x1?playerA=${this.player1}&playerB=${this.player2}&uid=`;

            axios.get<ConfrontResult>(URL).then(confront => {
                if (confront.data.last_games.length === 0) {
                    alert("Nenhum jogo encontrado")
                }
                else {
                    console.log(confront.data);
                }
            });

        }

    }
}

export default MatchController;