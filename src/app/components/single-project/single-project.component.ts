import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.sass']
})
export class SingleProjectComponent implements OnInit {

 
  project!:Project;
 
  constructor(private projectService:ProjectService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // test project
    const IdProject = this.route.snapshot.params['id'];
    try{
      this.project = this.projectService.getProjectById(+IdProject);
    }catch(e){
        console.log(e);
    }
    
  }


}
