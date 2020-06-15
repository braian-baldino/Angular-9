import { Component, OnInit } from '@angular/core';
import { AnualBalanceService } from 'src/app/services/anualBalance.service';
import { IAnualBalance } from 'src/app/interfaces/IAnualBalance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private anualBalanceService: AnualBalanceService) { }

  anualTableColumns:string[]= ['year','positive','result'];
  anualBalances: IAnualBalance[];

  ngOnInit(): void {
    this.loadAnualBalances();  
  }

    loadAnualBalances(){
    this.anualBalanceService.getAnualBalances().subscribe(res => {this.anualBalances = res;});
  }

}
