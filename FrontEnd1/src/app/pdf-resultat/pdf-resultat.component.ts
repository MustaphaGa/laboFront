import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailResultatDTO } from 'src/gs-api/src/models/detail-resultat-dto';
import { PatientDTO } from 'src/gs-api/src/models/patient-dto';
import { PatientService } from '../services/patient/patient.service';
import { DetailresultatService } from '../services/resultat/detailresultat.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as moment from 'moment';

import { DetailResultatComponent } from '../composants/detail-resultat/detail-resultat.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-resultat',
  templateUrl: './pdf-resultat.component.html',
  styleUrls: ['./pdf-resultat.component.css']
})
export class PdfResultatComponent implements OnInit {
  detailResultatDT: DetailResultatDTO = {};
  patientDt: PatientDTO = {};
  constructor(private router: Router,
              private patientService: PatientService,
              private activatedRouter: ActivatedRoute,
              private  detailresultatService: DetailresultatService) { }

  ngOnInit(): void {
   // console.log(moment(this.patientDt.dateNaissance).format('DD/MM/YYYY'));

    /* const idpatient = this.activatedRouter.snapshot.params.idPatient;
    if (idpatient) {
      this.patientService.findPatientById(idpatient)
      .subscribe(patient => {
        this.patientDt = patient;
      });
    } */
    const idresult = this.activatedRouter.snapshot.params.idResultat;
    if (idresult) {
       this.detailresultatService.findDetailResulatById(idresult)
       .subscribe(result => {
         this.detailResultatDT = result;
         this.patientDt = this.detailResultatDT.analyseMedical.reservation.patient;
         console.log(this.detailResultatDT.analyseMedical.reservation.patient);

       });
     }

    }
  // tslint:disable-next-line:typedef
   generatePdf(action = 'open') {
        const documentDefinition = this.getDocumentDefinition();
        switch (action) {
          case 'open': pdfMake.createPdf(documentDefinition).open(); break;
          case 'print': pdfMake.createPdf(documentDefinition).print(); break;
          case 'download': pdfMake.createPdf(documentDefinition).download(); break;
          default: pdfMake.createPdf(documentDefinition).open(); break;
        }
      }


  // tslint:disable-next-line:typedef
      getDocumentDefinition() {
         // sessionStorage.setItem('detailResultatDT', JSON.stringify(this.detailResultatDT));
        // sessionStorage.setItem('patientDt', JSON.stringify(this.patientDt));
         return {
           content: [
             {
              image: 'data:image/png;base64,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',
              width: 100,
              alignment: 'right',

             },
             {
              text: 'Laboratoire d\'Alayses Médicales ',
              bold: true,
              fontSize: 20,
              width: 100,
              alignment: 'center',
              margin: [0, 0, 0, 20]

             },

              {
                columns: [
                    [{
                     // text: 'name :' +this.detailResultatDT.description,
                     // style: 'name'
                    },

                   {text: [
                   {text: 'Code Patient : ' + this.patientDt.codePatient + '\n', alignment: 'center' },
                   { text: 'Nom  :  ' + this.patientDt.nom + '\n', alignment: 'center'},
                   {text: 'Prenom  : ' + this.patientDt.prenom + '\n', alignment: 'center' },
                   { text: 'Né le :' + moment(this.patientDt.dateNaissance).format('DD/MM/YYYY') + '\n', alignment: 'center'},
                       // tslint:disable-next-line:max-line-length
                   { text: 'Prélévement du  :' + moment(this.detailResultatDT.analyseMedical.dateAnalyse).format('DD/MM/YYYY') + '\n', alignment: 'center' }
                  ],

                  },

                  {
                    style: 'tableExample',
                    margin: [0, 50],
                    table: {
                      widths: [300, '*', '*'],
                      body: [
                       ['ANALYSE', 'RESULTAT ', ' VALEUR NORMAL'],
                       [
                         {text: [
                             {text: 'Glycémie a jeun\n', italics: true , color: 'blue' },
                             {text: 'Enzymatique à l Hexokinase /G-6 PDH sur ARCHITECT ci4100 SR \n', fontSize: 10},
                             {text: 'Urémie \n', italics: true, color: 'blue'},
                             {text: 'Urése sur ARCHITECT ci4100 SR \n', fontSize: 10},
                             {text: 'Cholestérol Total  \n', italics: true, color: 'blue'},
                             {text: 'Cholestérol oxydase sur ARCHITECT ci4100 SR \n', fontSize: 10},
                             {text: 'Triglycérides \n', italics: true, color: 'blue'},
                             {text: 'Glycérol phosphate oxydase sur ARCHITECT ci4100 SR \n', fontSize: 10},
                             {text: 'Chorestérol-HDL \n', italics: true, color: 'blue'},
                             {text: 'Détergent séléctif et accélérateur sur ARCHITECT ci4100 SR ', fontSize: 10}
                           ],

                         },
                         {text: [
                           {text: this.detailResultatDT.valeur1 + ' g/L \n', italics: true, color: 'red'},
                           {text: this.detailResultatDT.valeur2 + ' mmol/L \n' , fontSize: 10},

                           {text: this.detailResultatDT.valeur3 + ' g/L \n', italics: true, color: 'red'},
                           {text: this.detailResultatDT.valeur4 + ' \n', fontSize: 10},

                           {text: this.detailResultatDT.valeur5 + ' g/L \n', italics: true, color: 'red'},
                           {text: this.detailResultatDT.valeur6 + 'mmol \n', fontSize: 10},

                           {text: this.detailResultatDT.valeur7 + 'g/L \n', italics: true, color: 'red'},
                           {text: this.detailResultatDT.valeur8 + ' mmol/L \n', fontSize: 10},

                           {text: this.detailResultatDT.valeur9 + ' g/L\n', italics: true, color: 'red'},
                           {text: this.detailResultatDT.valeur10 + ' mmol/L \n', fontSize: 10}


                         ]
                       },

                       {text: [

                         {text: '0.65 - 1.10 \n', italics: true, color: 'blue'},
                         {text: '3.61 - 6.11 \n' , fontSize: 10},
                         {text: '0.1 -0.5 \n', italics: true, color: 'blue'},
                         {text: '1.66 - 8.33 \n', fontSize: 10},
                         {text: '0 - 1.99 \n', italics: true, color: 'blue'},
                         {text: '0 - 5.14 \n', fontSize: 10, },
                         {text: '0 - 1.5 \n', italics: true, color: 'blue'},
                         {text: '0  - 1.71 \n', fontSize: 10},
                         {text: '0.4 - 0.9\n', italics: true, color: 'blue'},
                         {text: '1.03 - 2.32 \n', fontSize: 10}

                       ]
                     },

                       ]
                     ]
                   }
                 },

                   {
                    text: 'Resultat validé par Biologiste: DR' + ' ' + this.detailResultatDT.biologiste.nom,
                     margin: [0, 150],
                     alignment: 'right',
                   },




                 ],

                ]

              },
             ],


           };
         }



        }



