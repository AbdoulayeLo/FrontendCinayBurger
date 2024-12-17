import {Component, OnInit} from '@angular/core';
import {Burger} from "../../model/burger";
import {StatistiqueService} from "../../services/statistique.service";
import {Commande} from "../../model/commande";
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,scales } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.scss'
})
export class StatistiqueComponent implements OnInit {
  burgers: Burger[] = [];
  commandes: Commande[] = [];
  nombreBurgersDisponibles = 0;
  nombreBurgersCommandes = 0;
  nombreBurgersValides = 0;
  prixTotalBurgersValides = 0;

  // Chart.js data and options
  barChartData: ChartData<'bar'> = {
    labels: ['Burgers Disponibles', 'Burgers Commandés', 'Burgers Validés', 'Prix Total Validés'],
    datasets: [{
      data: [0, 0, 0, 0], // Initial values to be updated
      backgroundColor: ['#42A5F5', '#36BB6A', '#FF7043', '#FFA726'],
      hoverBackgroundColor: ['#64B5F6', '#81C784', '#FF8A65', '#FFB74D']
    }]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };


  constructor(private statistiqueService: StatistiqueService) {
  }


  ngOnInit(): void {
    this.statistiqueService.getBurgers().subscribe(burgers => {
      this.burgers = burgers;
      this.nombreBurgersDisponibles = burgers.length;
    });

    this.statistiqueService.getCommandes().subscribe(commandes => {
      this.commandes = commandes;
      this.nombreBurgersCommandes = commandes.length;
      const commandesValidees = commandes.filter(cmd => cmd.etat);
      this.nombreBurgersValides = commandesValidees.length;

      const dateAujourdhui = new Date();
      const dateDebutJournee = new Date(dateAujourdhui.getFullYear(), dateAujourdhui.getMonth(), dateAujourdhui.getDate());

      this.prixTotalBurgersValides = commandesValidees
        .filter(cmd => new Date(cmd.dateCommande) >= dateDebutJournee)
        .reduce((total, cmd) => {
          const burger = this.burgers.find(b => b.id === cmd.burger_id);
          return total + (burger ? burger.prix* cmd.quantite : 0);
        }, 0);

      // Update chart data
      this.barChartData.datasets[0].data = [
        this.nombreBurgersDisponibles,
        this.nombreBurgersCommandes,
        this.nombreBurgersValides,
        this.prixTotalBurgersValides
      ];
    });
  }


}

