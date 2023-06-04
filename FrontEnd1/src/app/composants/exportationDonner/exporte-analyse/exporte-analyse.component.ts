import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnalyseMedicalService } from 'src/app/services/analyse-medical/annalyse-medical.service';
import { AnalyseMedicalDTO } from 'src/gs-api/src/models/analyse-medical-dto';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exporte-analyse',
  templateUrl: './exporte-analyse.component.html',
  styleUrls: ['./exporte-analyse.component.css']
})
export class ExporteAnalyseComponent implements OnInit {
  analyseMedicalDt: AnalyseMedicalDTO={};
  listeAnalyse:Array<AnalyseMedicalDTO>=[];
  fileName= 'ExcelSheet.xlsx';
  constructor(
    private router:Router,
    private annalyseMedicalService :AnnalyseMedicalService,
  ) { }

  ngOnInit(): void {
    this.annalyseMedicalService.findAllAnalysMedical().subscribe(res => {
      this.listeAnalyse=res;
  
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
