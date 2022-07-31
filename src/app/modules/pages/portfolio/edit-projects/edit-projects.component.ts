import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Projects } from '@app/shared/models/projects';
import { UserInstitutes } from '@app/shared/models/user-institutes';
import { ProjectsService } from '@app/shared/services/projects.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {
  projectName = '';
  descripcion = '';
  repositoryUrl = '';
  userInfo = JSON.parse(sessionStorage.getItem('user')!);
  user = this.userInfo.id
  constructor(private projectsService : ProjectsService, private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }
 
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    const projects = new Projects();
    projects.projectName = this.projectName;
    projects.description = this.descripcion;
    projects.repositoryUrl = this.repositoryUrl;
    projects.usuario = {
      id: this.user
    };
    this.projectsService.update(id, projects).subscribe(
      data => {
        this.toastr.success('Item Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }
}
