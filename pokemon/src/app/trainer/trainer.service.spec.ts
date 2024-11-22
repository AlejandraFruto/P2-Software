import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { TrainerService } from './trainer.service';

describe('Service: Trainer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerService]
    });
  });

  it('should ...', inject([TrainerService], (service: TrainerService) => {
    expect(service).toBeTruthy();
  }));
});
