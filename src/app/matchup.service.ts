import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockWeekPerformance, mockMatchupsList } from './mock-teams';
import { TeamWeekResult } from './team-week-result';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  private matchupResultURL = 'api/mockWeekPerformance'

  constructor(private http: HttpClient) { }

  getMatchupsList(): Observable<number[][]>{
    return of(mockMatchupsList);
  }

  // getMatchupData(): Observable<TeamWeekResult[]>{
  //   console.log(of(mockWeekPerformance))
  //   return of(mockWeekPerformance);
  // }

  getMatchupData(): Observable<TeamWeekResult[]>{
    return this.http.get<TeamWeekResult[]>(this.matchupResultURL);
  }
}
