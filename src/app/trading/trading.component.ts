import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { MatButtonModule } from '@angular/material/button'
import { TradingService } from '../trading.service'


@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  leavingPlayer: Player;
  incomingPlayer: Player;

  constructor(private tradingService: TradingService) { }

  ngOnInit(): void {
  }

  onSelectPlayer(player: Player, indicator: number){
    if(indicator === 1){
      this.leavingPlayer = player;
    } else{
      this.incomingPlayer = player;
    }
  }

  submitTrade(): void {
    this.tradingService.submitTrade(this.leavingPlayer, this.incomingPlayer)
      .subscribe(() => this.confirmTrade());
  }

  confirmTrade(): void {
    
    console.log("Trade went through");
    this.tradingService.getTeamPlayers().subscribe(players => {
      console.log(players)
    })
    this.tradingService.getFreelancePlayers().subscribe(players => {
      console.log(players)
    })
  }

}
