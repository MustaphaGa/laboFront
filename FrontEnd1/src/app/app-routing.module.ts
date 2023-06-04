import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageAnalyseComponent } from './pages/analyses/page-analyse/page-analyse.component';
import { NouvelAnalyseComponent } from './pages/analyses/nouvel-analyse/nouvel-analyse.component';
import { PagePatientComponent } from './pages/patient/page-patient/page-patient.component';
import { PageBiologisteComponent } from './pages/biologiste/page-biologiste/page-biologiste.component';
import { NouveauBiologisteComponent } from './composants/nouveau-biologiste/nouveau-biologiste.component';
import { NouveauPatientComponent } from './composants/nouveau-patient/nouveau-patient.component';
import { PagePreleveurComponent } from './pages/preleveur/page-preleveur/page-preleveur.component';
import {ApplicationGuardService} from './services/guard/application-guard.service';
import { NouveauPreleveurComponent } from './composants/nouveau-preleveur/nouveau-preleveur.component';
import { PageReservationComponent } from './pages/patient/page-reservation/page-reservation.component';
import { NouveauReservationComponent } from './composants/nouveau-reservation/nouveau-reservation.component';
import { PageDepartementComponent } from './pages/page-departement/page-departement.component';
import { NouveauDepartementComponent } from './composants/nouveau-departement/nouveau-departement.component';
import { NouveauTypeAnalyseComponent } from './composants/nouveau-type-analyse/nouveau-type-analyse.component';
import { PageTypeAnalyseComponent } from './pages/page-type-analyse/page-type-analyse.component';
import { PageFactureComponent } from './pages/page-facture/page-facture.component';
import { NouveauFactureComponent } from './composants/nouveau-facture/nouveau-facture.component';
import { NouveauResultatComponent } from './composants/nouveau-resultat/nouveau-resultat.component';
import { PageResultatComponent } from './pages/page-resultat/page-resultat.component';
import { PatientDetaillComponent } from './detaill/patient-detaill/patient-detaill.component';
import { DetaillComponent } from './detaill/detaill.component';
import { BiologisteDetaillComponent } from './detaill/biologiste-detaill/biologiste-detaill.component';
import { PreleveurDetaillComponent } from './detaill/preleveur-detaill/preleveur-detaill.component';
import { AnalyseDetaillComponent } from './detaill/analyse-detaill/analyse-detaill.component';
import { FactureDetaillComponent } from './detaill/facture-detaill/facture-detaill.component';
import { ResultatDetaillComponent } from './detaill/resultat-detaill/resultat-detaill.component';
import { ReservationDetaillComponent } from './detaill/reservation-detaill/reservation-detaill.component';
import { ExportePatientComponent } from './composants/exportationDonner/exporte-patient/exporte-patient.component';
import { ExporteReservationComponent } from './composants/exportationDonner/exporte-reservation/exporte-reservation.component';
import { ExporteAnalyseComponent } from './composants/exportationDonner/exporte-analyse/exporte-analyse.component';
import { ExporteFactureComponent } from './composants/exportationDonner/exporte-facture/exporte-facture.component';
import { ExporteResultatComponent } from './composants/exportationDonner/exporte-resultat/exporte-resultat.component';
import { PdfResultatComponent } from './pdf-resultat/pdf-resultat.component';
import { PageEmployeesComponent } from './pages/employee/page-employees/page-employees.component';
import { NouveauEmployeComponent } from './composants/nouveau-employe/nouveau-employe.component';
import {PageLaboComponent} from "./pages/page-labo/page-labo.component";
import {NouveauLaboComponent} from "./composants/nouveau-labo/nouveau-labo.component";
import {PageAccueilPrincipalComponent} from "./pages/page-accueil-principal/page-accueil-principal.component";
import {PageAbsenceComponent} from "./pages/page-absence/page-absence.component";
import {DetailAbsenceComponent} from "./composants/detail-absence/detail-absence/detail-absence.component";
import { NouveauAbsenceComponent } from './composants/nouveau-absence/nouveau-absence/nouveau-absence.component';
import {PageRecrutementComponent} from "./pages/page-recrutement/page-recrutement.component";
import {PageMouvementComponent} from "./pages/page-mouvement/page-mouvement.component";
import { LaboDetailComponent } from './detaill/labo-detail/labo-detail.component';
import { EmployeDetaillComponent } from './detaill/employe-detaill/employe-detaill.component';



const routes:Routes=[
  {
    path: 'pagAccPrincp',
    component:PageAccueilPrincipalComponent
  },
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'register',
    component:PageInscriptionComponent

  },
  {
    path: '',
    component:PageAccueilComponent,
    canActivate: [ApplicationGuardService],
    children :[
      {
        path:'statistiques',
        component:PageStatistiquesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'analyses',
        component: PageAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelanalyse',
        component: NouvelAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelanalyse/:idAnalyse',
        component: NouvelAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailanalyse/:idAnalyse',
        component: AnalyseDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exporteAnalyse',
        component: ExporteAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'facture',
        component: PageFactureComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelfacture',
        component: NouveauFactureComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelfacture/:idFacture',
        component: NouveauFactureComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailfacture/:idFacture',
        component: FactureDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exportfacture',
        component: ExporteFactureComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailresultat',
        component: PageResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelResultat',
        component: NouveauResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouvelResultat/:idResultat',
        component: NouveauResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailResultat/:idResultat',
        component: ResultatDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exportpdf1/:idResultat',
        component: PdfResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exportResultat',
        component: ExporteResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exportpdf/:idPatient',
        component: PdfResultatComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'patients',
        component: PagePatientComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauPatient',
        component: NouveauPatientComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauPatient/:idPatient',
        component: NouveauPatientComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailPatient/:idPatient',
        component: PatientDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exportePatient',
        component: ExportePatientComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'reservation',
        component: PageReservationComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauReservation',
        component: NouveauReservationComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauReservation/:idReservation',
        component: NouveauReservationComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'exporteReservation',
        component: ExporteReservationComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailReservation/:idReservation',
        component: ReservationDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'departement',
        component: PageDepartementComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauDepartement',
        component: NouveauDepartementComponent,

      },
      {
        path: 'preleveurs',
        component: PagePreleveurComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauPreleveurs',
        component: NouveauPreleveurComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauPreleveurs/:idPreleveur',
        component: NouveauPreleveurComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailPreleveurs/:idPreleveur',
        component: PreleveurDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'biologiste',
        component: PageBiologisteComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauBiologist',
        component: NouveauBiologisteComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauBiologist/:idBiologiste',
        component: NouveauBiologisteComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailBiologist/:idBiologiste',
        component: BiologisteDetaillComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauTypeAnalyse',
        component: NouveauTypeAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'TypeAnalyse',
        component: PageTypeAnalyseComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'employe',
        component: PageEmployeesComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauEmploye',
        component: NouveauEmployeComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailEmploye/idEmploye',
        component:EmployeDetaillComponent ,
        canActivate: []
        
      },
      {
        path: 'absence',
        component: PageAbsenceComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauAbsence',
        component: NouveauAbsenceComponent,
         canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauAbsence/:idAbsence',
        component: NouveauAbsenceComponent,
         canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailAbsence/:idAbsence',
        component: DetailAbsenceComponent,
        canActivate: [ApplicationGuardService]
        
      },
   
      {
        path: 'recrutement',
        component: PageRecrutementComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'mouvement',
        component: PageMouvementComponent,
        canActivate: [ApplicationGuardService]

      },
    
      {
        path: 'labo',
        component: PageLaboComponent,
        canActivate: [ApplicationGuardService]

      },
      {
        path: 'nouveauLabo',
        component: NouveauLaboComponent,
         canActivate: [ApplicationGuardService]

      },
      {
        path: 'detailLabo',
        component: LaboDetailComponent,
        canActivate: []
        
      },
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
