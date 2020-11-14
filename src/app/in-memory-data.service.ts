import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PlayerPerformance } from './player-performance';
import { Player } from './player';
import { TeamWeekResult } from './team-week-result';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
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

  const player1 = {
    id: 1,
    name: 'BrokenBlade',
    position: Role.Top,
    teamID: 1,
    leagueID: 1,
  }

  const player2 = {
    id: 2,
    name: 'Spica',
    position: Role.Jungle,
    teamID: 1,
    leagueID: 1,
  }

  const player3 = {
    id: 3,
    name: 'Bjergsen',
    position: Role.Mid,
    teamID: 1,
    leagueID: 1,
  }

  const player4 = {
    id: 4,
    name: 'Doublelift',
    position: Role.ADC,
    teamID: 1,
    leagueID: 1,
  }

  const player5 = {
    id: 5,
    name: 'Biofrost',
    position: Role. Support,
    teamID: 1,
    leagueID: 1,
  }

  const player6 = {
    id: 6,
    name: 'Pobelter',
    position: Role.Mid,
    teamID: 0,
    leagueID: 1,
  }

  const player7 = {
    id: 7,
    name: 'CoreJJ',
    position: Role.Support,
    teamID: 0,
    leagueID: 1,
  }

  const player8 = {
    id: 8,
    name: 'Treatz',
    position: Role. Support,
    teamID: 0,
    leagueID: 1,
  }

  const mockWeekPerformance: TeamWeekResult[] = [mockTeamWeekResult1, mockTeamWeekResult2, mockTeamWeekResult3, mockTeamWeekResult4];
  const mockMatchupsList: number[][] = [[1,2], [3,4]];
  const teamPlayers: Player[] = [player1, player2, player3, player4, player5];
  const freelancePlayers: Player[] = [player6, player7, player8];


    return {
        performances: mockWeekPerformance,
        matchups: mockMatchupsList,
        teamPlayers: teamPlayers,
        freelancePlayers: freelancePlayers
    };
    } 
}
