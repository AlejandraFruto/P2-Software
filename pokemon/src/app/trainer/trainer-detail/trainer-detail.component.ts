import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail: any;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
    const trainerId = this.route.snapshot.paramMap.get('id');
    
    if (trainerId) {
      this.trainerService.getTrainerDetails(+trainerId).subscribe(
        (data) => {
          this.trainerDetail = data;
        },
        (error) => {
          console.error('Error al obtener los detalles del entrenador:', error);
        }
      );
    }
  }

  getAverageLevel(): number {
    if (!this.trainerDetail?.pokemons || this.trainerDetail.pokemons.length === 0) {
      return 0;
    }
    
    const totalLevel = this.trainerDetail.pokemons.reduce((sum: number, pokemon: any) => {
      return sum + pokemon.level;
    }, 0);

    return totalLevel / this.trainerDetail.pokemons.length;
  }
}
