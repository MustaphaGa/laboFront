import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturesService } from 'src/app/services/facture/factures.service';
import { FactureDTO } from 'src/gs-api/src/models/facture-dto';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exporte-facture',
  templateUrl: './exporte-facture.component.html',
  styleUrls: ['./exporte-facture.component.css']
})
export class ExporteFactureComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  listefacture :Array<FactureDTO>  = [];
  constructor(
    private router:Router,
    private  facturesService:FacturesService,
  ) { }

  ngOnInit(): void {
    this.facturesService.findAllFacture().subscribe(res => {
      this.listefacture=res;
  
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
