import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamWeekResult } from './team-week-result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  private matchupResultURL = 'api/performances';
  private matchupListURL = 'api/matchups';

  constructor(private http: HttpClient) { }

  getMatchupsList(): Observable<number[][]>{
    return this.http.get<number[][]>(this.matchupListURL);
  }

  getMatchupData(): Observable<TeamWeekResult[]>{
    return this.http.get<TeamWeekResult[]>(this.matchupResultURL);
  }
}
