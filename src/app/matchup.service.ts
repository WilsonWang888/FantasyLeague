import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockWeekPerformance, mockMatchupsList } from './mock-teams';
import { TeamWeekResult } from './team-week-result';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  constructor() { }

  getMatchupsList(): Observable<number[][]>{
    return of(mockMatchupsList);
  }

  getMatchupData(): Observable<TeamWeekResult[]>{
    return of(mockWeekPerformance);
  }
}
