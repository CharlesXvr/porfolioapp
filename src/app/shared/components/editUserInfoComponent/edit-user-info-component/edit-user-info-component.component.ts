import { Component, OnInit } from '@angular/core';
import { Users } from '@app/shared/clases/users';
import { UserService } from '@app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';


@Component({
  selector: 'app-edit-user-info-component',
  templateUrl: './edit-user-info-component.component.html',
  styleUrls: ['./edit-user-info-component.component.scss']
})
export class EditUserInfoComponentComponent implements OnInit {

  id:number;
  user:Users = new Users();
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(dato =>{
      this.user = dato;
    },error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
    swal.fire('Empleado actualizado',`El empleado ${this.user.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.userService.updateUser(this.id,this.user).subscribe(dato => {
      this.goToUserList();
    },error => console.log(error));
  }
  
}

