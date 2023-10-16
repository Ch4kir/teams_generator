import { Component } from '@angular/core';

@Component({
  selector: 'team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent {
  newMemberName = '';
  members: string[] =[];
  errorMessage = '';
  numberOfTeams: number | ''= '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Please enter a name';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage ='';
    
  }
  onInput(member: string){
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = parseInt(value);
    console.log(this.numberOfTeams);
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = 'Please enter a valid number of teams';
      return;
    }
    if(this.members.length < this.numberOfTeams){
      this.errorMessage = 'Please enter more members';
      return;
    }
    
    this.errorMessage = '';
    const allMembers = [...this.members];

    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){

        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member){
          break;
        }
        if(this.teams[i]){
          this.teams[i].push(member);
        
        } else {
          this.teams[i] = [member];
         } 
      }
    }
    this.members = [];
    this.numberOfTeams = '';
  }

  resetTeams() {
    this.teams = []; // Reset the teams array to an empty array
  }
}
