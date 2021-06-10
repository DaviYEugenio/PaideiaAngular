import { CandidateService } from './services/candidate.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paideiaAngular';

  constructor(private service: CandidateService,
    private router: Router){
  }
}
