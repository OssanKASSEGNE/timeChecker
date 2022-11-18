import { Time } from "@angular/common";

export class Project{

    constructor(
        public id:number,
        public title:string,
        public description:string,
        public timeSpent: Time, // type alias {hours:...; minutes: number} => Time struct in c#
        public deadLine:Date,
        public auteur?:string,
        public imageUrl?:string
        // Ajouter historique
        // Ajouter créateur
    ){}
}