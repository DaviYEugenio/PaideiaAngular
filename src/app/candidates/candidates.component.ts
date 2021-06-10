import { Teste } from './../models/candidates.model';
import { CandidateService } from './../services/candidate.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Candidate } from '../models/candidates.model';
import { Router } from '@angular/router';
import * as $ from 'jquery';



@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
})
export class NewCandidateComponent {
  candidates: any[];
  name: string;
  SpouseTraining: string;
  Church:string;
  Email:string;
  Fone:string;
  Cell: string;
  FoneComercial: string;
  IsFromIBPV: string;
  ShepherdOrMissionary: string;
  TrainingId: string;
  test: number = 0;
  error: boolean;

  constructor(private service: CandidateService, private router: Router) {

  }
  ngOnInit() {
    this.service.todas().subscribe((candidates: Candidate[]) => {
      console.log(candidates);
      this.candidates = candidates;
    });
  }
  Cadastrar() {
    const valorEmitir:  Candidate = ({name: this.name, Church: this.Church, IsFromIBPV: this.IsFromIBPV,ShepherdOrMissionary: this.ShepherdOrMissionary, SpouseTraining: this.SpouseTraining, Email: this.Email, Fone: this.Fone,  Cell: this.Cell, FoneComercial: this.FoneComercial, TrainingId: this.TrainingId});
    const response: Teste = ({error: this.error})

      if (this.name != null && this.Church != null && this.Email != null && this.Fone != null && this.Cell != null && this.FoneComercial != null && this.TrainingId != null){
        this.service.adicionar(valorEmitir).subscribe((resultado) => {
          var result = resultado;
          if(result.error == true){
            this.test = 1
          }
          else{
            this.test = 2
          }
        });
      }
      else{
        alert("preencha os campos obrigatorios")
      }
      (error) => console.log(error)

        setTimeout(function () {
          $('#alertsuccess2').hide()
        }, 8000);

    }
}
