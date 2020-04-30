import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

export class ClienteModel{

    id: string;
    nombre:string;
    apellido_paterno:string;
    apellido_materno:boolean;
    run: string;
    fecha_nacimiento:number;
    cobro_mensual: number;
    telefono: number;
    email: number;
    patente_auto: string;


    constructor(){
    }

}