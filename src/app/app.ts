import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  voters: any[] = [];
candidates: any[] = [];
selectedVoter!: number;
selectedCandidate!: number;

constructor(private service: VotingService) {}

ngOnInit() {
  this.service.getVoters().subscribe(v => this.voters = v);
  this.service.getCandidates().subscribe(c => this.candidates = c);
}

vote() {
  this.service.vote(this.selectedVoter, this.selectedCandidate)
    .subscribe(() => alert('Vote submitted'));
}

}
