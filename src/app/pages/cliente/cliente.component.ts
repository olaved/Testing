import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';

import { NgForm } from '@angular/forms';
import { AutosService } from 'src/app/services/autos.service';
import { ClientesService } from 'src/app/services/clientes.service';


import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  cliente: ClienteModel = new ClienteModel();

  constructor( private clientesService: ClientesService, private route: ActivatedRoute) { }


  ngOnInit() {

  /*   const id = this.route.snapshot.paramMap.get('id');  //a las rutas

    if ( id !== 'kldool'){

      this.clientesService.getCliente(id).subscribe( (resp: ClienteModel) => {   //llamar al servicio
      this.cliente = resp;
      this.cliente.id = id;
      });
  }
*/
  }


/* 
    if ( id !== 'kldool'){

        this.autosService.getCliente(id).subscribe( (resp: ClienteModel) => {   //llamar al servicio
        this.cliente = resp;
        this.cliente.id = id;
        });
    }
*/

    guardar(form: NgForm){

    if (form.invalid){
      console.log('Formulario no valido');
      return;
      }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',    
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

      if (this.cliente.id){
        peticion = this.clientesService.actualizarCliente(this.cliente);

        peticion.subscribe(resp=>{

          Swal.fire({
            title: this.cliente.nombre.toUpperCase(),
            text: 'Se actualizo correctamente',
            icon: 'success'
          });
        });

        
      }else{
        peticion = this.clientesService.crearCliente(this.cliente);

        peticion.subscribe(resp=>{

          Swal.fire({
            title: this.cliente.nombre.toUpperCase(),
            text: 'Se a creado correctamente',
            icon: 'success'
          });
        });
      }
    }

  

}

