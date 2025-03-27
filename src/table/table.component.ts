import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: true, 
})
export class TableComponent implements OnInit {
  public data:any = []
  ngOnInit(): void {
    this.data =[
      {
        Age:23,Name:'stt1',height:'20'
      },
      {
        Age:23,Name:'stt1',height:'20'
      }
    ]
  }

}
