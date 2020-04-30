import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutoModel } from '../models/auto.model';
import { ClienteModel } from '../models/cliente.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private url='https://puertas3-ccf22.firebaseio.com/';
  clientes: any;

  constructor( private http: HttpClient) { }

  crearCliente( cliente: ClienteModel){
    return this.http.post(`${ this.url }/clientes.json`, cliente).pipe(
      map( (resp:any) =>{
        cliente.id= resp.name;
        return cliente;
      })
    );
  }

  actualizarCliente( cliente:ClienteModel){

    const clienteTemp = {
      ...cliente
    };

    delete clienteTemp.id;

    return this.http.put(`${this.url}/clientes/${cliente.id}.json`, clienteTemp);
  }
  


 getCliente(id: string){

  return this.http.get(`${this.url}/clientes/${id}.json`);
}


getClientes(){
  return this.http.get(`${this.url}/clientes.json`).pipe(
    map( resp=> this.crearArreglo(resp))
   );
}


private crearArreglo( clientesObj: object){
    
  const clientes: ClienteModel[] = [];
  console.log( clientesObj);
  Object.keys( clientesObj ).forEach( key =>{
    const cliente: ClienteModel = clientesObj[key];
    cliente.id = key;
    clientes.push(cliente);
  });

  return clientes;
}

 }