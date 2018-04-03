import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private code: number;
  private name: string;
  private email: string;
  private edu: { major: string, faculty: string, university: string };
  private skills: string[];

  constructor(public navCtrl: NavController) {
    this.code = 57920642;
    this.name = "Mr.podsaporn Saelim";
    this.email = "podsaporn.sa@buu.ac.th";
    this.edu = { major: "IT", faculty: "Informatics", university: "Burapha University" };
    this.skills = ["HTML", "CSS", "JS", "PHP", "SQL"];
  }

  addSkill(val_skill) {
    this.skills.unshift(val_skill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index,1); 
      }
    });
  }

}
