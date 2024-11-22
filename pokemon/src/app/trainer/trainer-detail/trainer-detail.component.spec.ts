import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail: any; 
  trainerId: number | null = null; 

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {
   
    this.trainerId = this.route.snapshot.paramMap.get('id') 
      ? +this.route.snapshot.paramMap.get('id')! 
      : null;

    if (this.trainerId) {
      this.trainerService.getTrainerDetails(this.trainerId).subscribe((data) => {
        this.trainerDetail = data;
      });
    }
  }
}
