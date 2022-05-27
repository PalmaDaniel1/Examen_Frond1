import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  id: Number;
  clave: string; 
  nombre: string;
  precio: any;

  frutas: Fruta;

  constructor(
    public frutaService: FrutasService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  

  Actualizar(){
    //this.frutas.clave = this.clave;
    if(this.clave && this.nombre){
      console.log("modificar nombre");
     var modificar = {nombre: this.nombre}
      this.frutaService.updateFrutas(this.frutas, modificar).subscribe(data =>{ 
        this.frutas= data;
      });
    }else if (this.clave && this.precio) {
      console.log("modificar precio");
      this.frutaService.updateFrutas(this.frutas, this.precio).subscribe(data => {
        this.frutas=data;
      });     
    } else {
      Swal.fire("Validación", "Deve ingresarse la Clave y el campo a modificar",
      'success');
    }
  }

}
