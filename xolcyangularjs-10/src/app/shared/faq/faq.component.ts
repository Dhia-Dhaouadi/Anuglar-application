import { Component, OnInit } from '@angular/core';

interface list {
  que: string;
  ans: string;
  link: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
/**
 * Layout-2 FAQ component
 */
export class FaqComponent implements OnInit {

  constructor() { }

  heading: string = "Pourquoi faire appel à notre Cabinet?";
  faqList: list[] = [
    {
      que: 'RESPECT SCRUPULEUX DE LA REGLEMENTATION',
      ans: 'Le Cabinet Blanchard veille au respect des articles R124-1 à R124-7 du code des procédures civiles d exécution (anciennement décret 96-1112), qui réglemente l’activité des sociétés de recouvrement. Activité déclarée à Monsieur Le Procureur de la République près le Tribunal de Grande Instance.',
      link: 'config-panel-one'
    },
    {
      que: 'COMPTES BANCAIRES SPECIALEMENT AFFECTES',
      ans: 'En conformité avec les exigences légales, le Cabinet Blanchard possède des comptes bancaires spécifiques, dont un réservé exclusivement à la réception des fonds encaissés pour le compte des créanciers et un second utilisé pour la gestion quotidienne de la société.',
      link: 'config-panel-two'
    }
  ];

  ngOnInit(): void {
  }

}
