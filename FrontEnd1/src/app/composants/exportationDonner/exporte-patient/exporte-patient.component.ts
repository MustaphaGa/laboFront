import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient/patient.service';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-exporte-patient',
  templateUrl: './exporte-patient.component.html',
  styleUrls: ['./exporte-patient.component.css']
})
export class ExportePatientComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  listepatient :Array<PatientDTO>  = [];
  constructor(private router:Router,
    private patientService:PatientService
     ) { }

  ngOnInit(): void {
    this.patientService.findAllPatient().subscribe(res => {
      this.listepatient=res;
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
