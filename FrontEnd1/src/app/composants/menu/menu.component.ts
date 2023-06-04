import { Component, OnInit } from '@angular/core';
import{ Menu} from '../menu';
import{Router}from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public menuProperties: Array<Menu> = [
  {
  id: '1',
  titre: 'Tableau de bord' ,
icon:'fas fa-chart-line',
url:'',
sousMenu :[
  {
    id:'11',
    titre:'Vue d\'ensemble',
    icon:'fas fa-chart-pie',
    url:''
  },
  {
    id:'12',
    titre:'statistique',
    icon:'far fa-chart-bar',
    url:'statistiques',
  }
]


},
{
  id:'24',
  titre:'Analyses',
  icon:'fas fa-diagnoses',
  url:'',
  sousMenu :[
    {
      id:'25',
      titre:' analyse medical',
      icon:'fas fa-plus',
      url:'analyses'
    },
    {
      id:'29',
      titre:' facture',
      icon:'fas fa-file-invoice',
      url:'facture'
    },
    {
      id:'30',
      titre:' Detail Resultat',
      icon:'fas fa-poll-h',
      url:'detailresultat'
    }

  ]
},
{
  id:'23',
  titre:'Patients',
  icon:' fas fa-users',
  url:'',
  sousMenu :[
    {
      id:'21',
      titre:'Patients',
      icon:'fas fa-users',
      url:'patients'
    },
    {
      id:'28',
      titre:'Reservation',
      icon:'fas fa-cauldron',
      url:'reservation'
    }
  ]
},
{
  id:'2-',
  titre:'Preleveur',
  icon:'fas fa-user-nurse',
  url:'',
  sousMenu :[
    {
      id:'27',
      titre:'preleveurs',
      icon:'fas fa-user-nurse',
      url:'preleveurs'
    }
  ]
},
{
  id:'25',
  titre:'Biologistes',
  icon:' fas fa-user-md',
  url:'',
  sousMenu :[
    {
      id:'21',
      titre:'Biologistes',
      icon:'fas fa-user-md',
      url:'biologiste'
    }
  ]
},
  {
    id:'26',
    titre:'RH',
    icon:' fas fa-users-cog',
    url:'',
    sousMenu :[
      {
        id:'20',
        titre:'employees',
        icon:'fas fa-users-cog',
        url: 'employe'
      },
      {
        id:'21',
        titre:'absence',
        icon:'',
        url: 'absence'
      },
      {
        id:'22',
        titre:'conges',
        icon:'',
        url: 'conges'
      },
      {
        id:'23',
        titre:'recrutement',
        icon:'',
        url: 'recrutement'
      },
      {
        id:'24',
        titre:'mouvement',
        icon:'',
        url: 'mouvement'
      },


    ]
  },
{
  id:'20',
  titre:'Parametre',
  icon:'fas fa-cogs',
  url:'',
  sousMenu :[
    {
      id:'16',
      titre:'labo',
      icon:'',
      url: 'labo'
    },
    {
      id:'17',
      titre:'Type Analyse',
      icon:'',
      url:'TypeAnalyse'
    },
    {
      id:'18',
      titre:'Departement',
      icon:'',
      url:'departement'
    },

  ]
}
];
  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  navigate(url?: string): void{
this.router.navigate([url]);
  }

}
