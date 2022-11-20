import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import {faker} from '@faker-js/faker/locale/fr';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent implements OnInit {

  // Todo delete
  projects!:Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {

    this.projects = this.projectService.getAllProjects();
    console.log(this.projects);
    // this.projects = [
    //   new Project(1,"Refactoring","Refactor Winflotte 10 code fast", {hours:10,minutes:4},new Date,"Gustavo Fring"),
    //   {
    //     id: 2,
    //     title: "Rédaction doc états",
    //     description:"Rédiger une documention concernant les états pour Noémie Farizon",
    //     timeSpent: {hours:0,minutes:0},
    //     deadLine: new Date(2023,12,21),
    //     auteur: "Ossan KASSEGNE"
    //   },
    //   {
    //     id: 3,
    //     title: "SSO",
    //     description:"Rendre le SSO générique pour envoyer un seul lien au client",
    //     timeSpent: {hours:0,minutes:10},
    //     deadLine: new Date(2024,12,21),
    //     auteur: "Ossan KASSEGNE"
    //   },
    //   {
    //     id: 4,
    //     title: faker.word.noun(),
    //     description: faker.lorem.sentence(10),
    //     timeSpent: {hours:this.getRandomInt(0,20),minutes:this.getRandomInt(0,59)},
    //     deadLine: faker.date.future(),
    //     auteur: faker.name.fullName(),
    //     imageUrl: faker.image.technics(),
    //   }
    // ]
  }

  // To get Random Time values
  getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

}
