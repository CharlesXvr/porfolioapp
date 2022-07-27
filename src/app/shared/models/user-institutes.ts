export class UserInstitutes {
    id?:number;
    titulo:string;
    descripcion:string;
    instituteId:number;
    userId:number
    constructor(titulo: string, descripcion: string, instituteId: number, userId: number) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.instituteId = instituteId;
        this.userId = userId;
    }
}
