import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from 'src/app/models/cliente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes: ClienteModel[] = [];
  
  
  constructor( private clientesService: ClientesService ) { }

  ngOnInit() {
  
  this.clientesService.getClientes().subscribe( resp => this.clientes = resp);

}

}
