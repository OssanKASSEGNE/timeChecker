import { Injectable, OnInit } from "@angular/core";
import { Project } from "../models/project-model";
import { faker } from "@faker-js/faker";

@Injectable({
    // Indique que le service est disponible à la racine de l'application (une seule instance du service)
    providedIn : 'root'
})

export class ProjectService{
    // Pas de ngOnInit pour les services.

    // Service va contenir les données et la logique, c'est comme un contrôleur

    private projects:Project[] = [];
    private p!:Project;

     // To get Random Time values
     private getRandomInt(min:number, max:number):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    // generate projects
    private giveProjects(quantity:number):void{
        for ( let i = 1; i <= quantity; i++) {
            this.projects.push(
                 {
                 id: i,
                 title: faker.word.noun(),
                 description: faker.lorem.sentence(10),
                 timeSpent: {hours:this.getRandomInt(0,20),minutes:this.getRandomInt(0,59)},
                 deadLine: faker.date.future(),
                 auteur: faker.name.fullName(),
                 imageUrl: faker.image.technics(),
               })
         }
    }

    getAllProjects():Project[]{
        if(this.projects.length == 0) this.giveProjects(10);
        return this.projects;
    }

    getProjectById(id:number):Project{
        if(this.projects.length == 0) this.giveProjects(10);
        console.log(this.projects);
        const projet = this.projects.find(p => p.id === id);
         if (projet) return projet;
         else throw new Error ("This projet doesn't exist ! ");
       
    }
    
 

   
}