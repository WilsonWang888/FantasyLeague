import { Role } from './role';

export interface PlayerPerformance {
    playerID: number;
    playerName: String;
    position: Role;
    score: number;
}