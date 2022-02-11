export interface ConfrontResultLastGames{
    home_name: string,
    home_team_name: string;
    home_player: string,
    away_name: string,
    away_team_name: string
}
export interface ConfrontResult{
    average_goals: {
        jogadorA_average: string,
        jogadorA_goals: number,
        jogadorB_average: string,
        jogadorB_goals: number
    };
    jogadorA: {
        name:string
    }
    jogadorB:{
        name:string
    }
    last_games: ConfrontResultLastGames[];
}

class Confront {

}

export default Confront;