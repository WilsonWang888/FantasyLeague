import { PlayerPerformance } from './player-performance';

export class TeamWeekResult {
    userID: number;
    userName: String;
    leagueID: number;
    teamID: number;
    teamName: String;
    weekID: number;
    totalScore: number;
    performance: PlayerPerformance[];
}