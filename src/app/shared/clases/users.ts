export class Users {
    id:number; 
    nombre:string;
    apellido:string;
    email:string;
    password:string;
    telefono:number;
    nombreUsuario:string;
    birthday:Date;
    roles:string[];

    constructor(id:number,nombre: string, apellido: string, email:string,password:string, telefono:number, nombreUsuario:string ,birthday:Date, roles:string[]) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.nombreUsuario = nombreUsuario;
        this.birthday = birthday;
        this.roles = roles;

    }
}
