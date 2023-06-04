import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationnService } from 'src/app/services/reservation/reservationn.service';
import { ReservationDTO } from 'src/gs-api/src/models/reservation-dto';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exporte-reservation',
  templateUrl: './exporte-reservation.component.html',
  styleUrls: ['./exporte-reservation.component.css']
})
export class ExporteReservationComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  listeResevation :Array<ReservationDTO>  = [];
  constructor( private router:Router,
    private reservationnService:ReservationnService) { }

  ngOnInit(): void {
    this.reservationnService.findAllReservation().subscribe(res => {
      this.listeResevation=res;
    });
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
