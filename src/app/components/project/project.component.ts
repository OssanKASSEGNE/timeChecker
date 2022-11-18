import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project-model';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit {

  projet1!:Project;
  @Input() projet!:Project;

  constructor() { }

  ngOnInit(): void {
    // test project
    this.projet1 = new Project(1,"Refactoring","Refactor Winflotte 10 code fast", {hours:10,minutes:4},new Date,"Gustavo Fring");
  }

}
