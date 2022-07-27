import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/shared/services/user.service';
import { PortfolioComponent } from '../../../portfolio.component';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  user : any[] = [];
  currentUser;
  userInfo = JSON.parse(sessionStorage.getItem('user')!);
  displayEditEducationItem = false;
  constructor(private router : Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.user.push(sessionStorage.getItem('user')!)
  }
  onPress() {
    this.displayEditEducationItem = !this.displayEditEducationItem;
  }
  getUsers(): void {
    this.userService.getUsersList().subscribe(
      data => {
        this.user = data;
        for (let i of this.user) {
          if (i.id == this.userInfo.id) {
            this.currentUser = i;
            console.log(this.currentUser);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
