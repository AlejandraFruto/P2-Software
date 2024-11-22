import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }

  onSelected(trainerId: number) {
    this.router.navigate([`/trainers/${trainerId}`]); 
  }
}
