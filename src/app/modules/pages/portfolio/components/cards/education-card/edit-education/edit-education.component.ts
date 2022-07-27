import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInstitutes } from '@app/shared/models/user-institutes';
import { EducationServiceService } from '@app/shared/services/education-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.scss']
})
export class EditEducationComponent implements OnInit {
  userInstitutes:UserInstitutes;
  institutes:any[] = [];
  constructor(private router: Router, private userInstituteService:EducationServiceService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit():void {
    this.getInstitutes();
    console.log(this.institutes);
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userInstituteService.update(id, this.userInstitutes).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }
  getInstitutes(): void {
    
    this.userInstituteService.getInstitute().subscribe(
      (response)  => {
        this.institutes.push(response);
        console.log(this.institutes);
      },
      err => {
        console.log(err);
      }
    );
  }

}
