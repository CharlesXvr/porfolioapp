import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Users } from '@app/shared/clases/users';
import { UserService } from '@app/shared/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user : Users = new Users;
  constructor(private userService : UserService, private router:Router) { }

  ngOnInit(): void {
  }
  storageeUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserTable();
    },error => console.log(error))
  }
  goToUserTable() {
    this.router.navigate(['/users']);
  }
  onSubmit() {
    this.storageeUser();
  }

}
