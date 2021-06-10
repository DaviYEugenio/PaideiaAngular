import { Teste } from './../models/candidates.model';
import { Candidate } from '../models/candidates.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private listaTransferencia: any[];
  private url = 'http://localhost:37514/api/Candidate';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia= [];
}
get transferencias() {
  return this.listaTransferencia;
}
todas(): Observable<Candidate[]>{
  return this.httpClient.get<Candidate[]>(this.url);
}
adicionar(candidate: Candidate): Observable<Teste> {
  this.hidratar(candidate);
  return this.httpClient.post<Teste>(this.url, candidate)
}
private hidratar(candidate: any){
  candidate.data = new Date();
}

}
