import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project-model';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit {

  projet1!:Project;
  url:string = "url(\"https://silicon.createx.studio/assets/img/portfolio/courses/01.jpg\") center center"
  @Input() projet!:Project;

  constructor(private route:Router) { }

  ngOnInit(): void {
    // test project
    this.projet1 = new Project(1,"Refactoring","Refactor Winflotte 10 code fast", {hours:10,minutes:4},new Date,"Gustavo Fring");
  }

  goToProjectDetails(){
    this.route.navigateByUrl(`projects/${this.projet.id}`);
  }
}
