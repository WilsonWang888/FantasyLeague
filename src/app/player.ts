import { Role } from './role';

export interface Player {
    id: number;
    name: String;
    position: Role;
    teamID: number;
    leagueID: number;
}