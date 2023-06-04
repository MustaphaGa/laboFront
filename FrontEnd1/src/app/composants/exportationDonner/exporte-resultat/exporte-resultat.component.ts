import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailresultatService } from 'src/app/services/resultat/detailresultat.service';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exporte-resultat',
  templateUrl: './exporte-resultat.component.html',
  styleUrls: ['./exporte-resultat.component.css']
})
export class ExporteResultatComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  listeResult :Array<DetailResultatDTO>  = [];
  constructor(
    private router:Router,
    private  detailresultatService :DetailresultatService,
  ) { }

  ngOnInit(): void {
    this.detailresultatService.findAllDetailResult().subscribe(res => {
      this.listeResult=res;
})
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
