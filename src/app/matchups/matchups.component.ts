import { Component, OnInit } from '@angular/core';
import { TeamWeekResult } from '../team-week-result'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component'
import { mockWeekPerformance, mockMatchupsList } from '../mock-teams'

@Component({
  selector: 'app-matchups',
  templateUrl: './matchups.component.html',
  styleUrls: ['./matchups.component.scss']
})
export class MatchupsComponent implements OnInit {
  matchupsList: number[][];
  matchData: TeamWeekResult[];
  matchResults: TeamWeekResult[][];
  expandedMatch: number;

  constructor() { }

  ngOnInit(): void {
    this.matchupsList = mockMatchupsList;
    this.matchData = mockWeekPerformance;
    this.matchResults = [];
    for(var i: number = 0; i < this.matchupsList.length; i++) {
      this.matchResults[i] = [];
      for(var j: number = 0; j< 10; j++) {
          this.matchResults[i][j] = new TeamWeekResult();
      }
    }
    this.calculateTotalScores();
    this.sortMatches();
    this.expandMatch(0);
  }

  sortMatches(): void {
    for(let matchup in this.matchupsList){
      for(let data of this.matchData){
        if(data.teamID === this.matchupsList[matchup][0])
          this.matchResults[matchup][0] = data;
        else if(data.teamID === this.matchupsList[matchup][1])
          this.matchResults[matchup][1] = data;
      }
    }
  }

  expandMatch(match: number): void {
    this.expandedMatch = match;
  }

  calculateTotalScores(): void{
    for(let data of this.matchData){
      let totalScore = 0;
      for(let player of data.performance){
        totalScore += player.score;
      }
      data.totalScore = totalScore;
    }
  }

}
