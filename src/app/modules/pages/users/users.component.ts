import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '@app/shared/clases/users';
import { UserService } from '@app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Users[];

  constructor(private userService: UserService, private router:Router) { }

  private getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    })
  }
  updateUser(id:number){
    this.router.navigate(['updateUser',id]);
  }
  async onDelete (id:number) {
    if(!confirm('Desea eliminar este usuario?')) {
      return;
    }
  
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data)
      this.getUsers();
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
