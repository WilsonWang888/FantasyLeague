import { LazyRoute } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { TradingService } from '../trading.service'

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.scss']
})
export class TradeListComponent implements OnInit {
  @Input() 
  teamID: number;
  @Output()
  selected: EventEmitter<Player> = new EventEmitter<Player>();
  players: Player[];
  searchQuery: String;
  selectedPlayerElement: any;

  constructor(private tradingService: TradingService) { }

  ngOnInit(): void {
    if (this.teamID != 0) {
      this.tradingService.getTeamPlayers().subscribe(players => {
        this.players = players;
      })
    } else {
      this.tradingService.getFreelancePlayers().subscribe(players => {
        this.players = players;
      })
    }
  }

  selectPlayer(player: Player, event): void {
    this.selected.emit(player);
    console.log(event.srcElement);
    if(this.selectedPlayerElement){
      this.selectedPlayerElement.classList.remove("selectedlistButton");
    }
    this.selectedPlayerElement = event.srcElement;
    this.selectedPlayerElement.classList.add("selectedlistButton");
  }

}
