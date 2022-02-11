import MatchController from "../controller/Match-Controller";

class Match {

    player1 : string | undefined
    player2 : string | undefined
    arena : string | undefined

    constructor(numberID: number){
        this.player1 = document.querySelector<HTMLSelectElement>(`#card${numberID}player1`)?.value
        this.player2 = document.querySelector<HTMLSelectElement>(`#card${numberID}player2`)?.value
        this.arena = document.querySelector<HTMLSelectElement>(`#card${numberID}arena`)?.value
    }

    confrontResult(){
        const matchController = new MatchController(this.player1, this.player2,this.arena);

        matchController.playersConfront();
    }

}

export default Match;