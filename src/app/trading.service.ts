import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  private teamPlayersURL = 'api/teamPlayers';
  private freelancePlayersURL = 'api/freelancePlayers';
  private submitTradeURL =  'api/teamPlayers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTeamPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.teamPlayersURL);
  }

  getFreelancePlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.freelancePlayersURL);
  }

  submitTrade(leavingPlayer: Player, incomingPlayer: Player): Observable<any>{
    let updatedLeaver = leavingPlayer; 
    let updatedIncomer = incomingPlayer;
    updatedLeaver.teamID = incomingPlayer.teamID;
    updatedIncomer.teamID = leavingPlayer.teamID;
    console.log(updatedLeaver.teamID);
    console.log(updatedIncomer.teamID);
    this.http.delete(this.freelancePlayersURL + '/' + incomingPlayer.id, this.httpOptions)
      .subscribe(result => console.log('leaver added'));
    this.http.delete(this.submitTradeURL + '/' + leavingPlayer.id, this.httpOptions)
      .subscribe(result => console.log('incomer added'));
    this.http.post(this.freelancePlayersURL, updatedLeaver, this.httpOptions)
      .subscribe(result => console.log('leaver added'));
    this.http.post(this.submitTradeURL, updatedIncomer, this.httpOptions)
      .subscribe(result => console.log('incomer added'));
    return of(1)
  }
}
