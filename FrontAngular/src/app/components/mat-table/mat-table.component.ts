import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnualBalanceService } from 'src/app/services/anualBalance.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  tableDataSrc: Object;
  @Input() tableCols: string[];
  @Input() tableData: {}[];

  constructor() { }

  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

}
