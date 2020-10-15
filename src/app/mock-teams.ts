import { PlayerPerformance } from './player-performance';
import { TeamWeekResult } from './team-week-result';
import { Role } from './role';

const mockPlayerPerformance1: PlayerPerformance = {
    playerID: 1,
    playerName: 'BrokenBlade',
    position: Role.Top,
    score: 10
}

const mockPlayerPerformance2: PlayerPerformance = {
    playerID: 1,
    playerName: 'Spica',
    position: Role.Jungle,
    score: 20
}

const mockPlayerPerformance3: PlayerPerformance = {
    playerID: 1,
    playerName: 'Bjergsen',
    position: Role.Mid,
    score: 30
}

const mockPlayerPerformance4: PlayerPerformance = {
    playerID: 1,
    playerName: 'Doublelift',
    position: Role.ADC,
    score: 40
}

const mockPlayerPerformance5: PlayerPerformance = {
    playerID: 1,
    playerName: 'Biofrost',
    position: Role.Support,
    score: 50
}

const mockTeamWeekResult1: TeamWeekResult = {
    userID: 100,
    userName: 'demo1',
    leagueID: 1,
    teamID: 1,
    teamName: 'LCS Raiders',
    weekID: 1,
    totalScore: 0,
    performance: [mockPlayerPerformance1, mockPlayerPerformance2, mockPlayerPerformance3, mockPlayerPerformance4, mockPlayerPerformance5]
}

const mockTeamWeekResult2: TeamWeekResult = {
    userID: 101,
    userName: 'demo2',
    leagueID: 1,
    teamID: 2,
    teamName: 'LCS Warriors',
    weekID: 1,
    totalScore: 0,
    performance: [mockPlayerPerformance1, mockPlayerPerformance2, mockPlayerPerformance3, mockPlayerPerformance4, mockPlayerPerformance5]
}

const mockTeamWeekResult3: TeamWeekResult = {
    userID: 100,
    userName: 'demo3',
    leagueID: 1,
    teamID: 3,
    teamName: 'LCS Mustangs',
    weekID: 1,
    totalScore: 0,
    performance: [mockPlayerPerformance1, mockPlayerPerformance2, mockPlayerPerformance3, mockPlayerPerformance4, mockPlayerPerformance5]
}

const mockTeamWeekResult4: TeamWeekResult = {
    userID: 101,
    userName: 'demo4',
    leagueID: 1,
    teamID: 4,
    teamName: 'LCS Berserkers',
    weekID: 1,
    totalScore: 0,
    performance: [mockPlayerPerformance1, mockPlayerPerformance2, mockPlayerPerformance3, mockPlayerPerformance4, mockPlayerPerformance5]
}

export const mockWeekPerformance: TeamWeekResult[] = [mockTeamWeekResult1, mockTeamWeekResult2, mockTeamWeekResult3, mockTeamWeekResult4];
export const mockMatchupsList: number[][] = [[1,2], [3,4]];