interface ConfrontLastGames{
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
        jogadorB_average: number
    };
    last_games: ConfrontLastGames[];
}

class Confront {

}

export default Confront;