import { Component, OnInit } from '@angular/core';
import { TokenService } from '@app/shared/services/token.service';
import { AuthService } from '@app/shared/services/auth.service';
import { Users } from '@app/shared/clases/users';
import { JwtDTO } from '@app/shared/models/jwt-dto';
import { UserService } from '@app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  number:number= 50;
  user : any[] = [];
  currentUser;
  userInfo = JSON.parse(sessionStorage.getItem('user')!);
  displayAddEducationItem = false;

  
  constructor(private userService: UserService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  saleData = [
    { name: "Mobiles", value: 50 },
  ];
  onPress() {
    this.displayAddEducationItem = !this.displayAddEducationItem;
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
