import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-fruta',
  templateUrl: './registrar-fruta.component.html',
  styleUrls: ['./registrar-fruta.component.scss']
})
export class RegistrarFrutaComponent implements OnInit {
  id: Number;
  clave: string; 
  nombre: string;
  precio: any;


  constructor(
    public frutaService: FrutasService,
    public router:Router 
  ) { }

  ngOnInit(): void {
  }
  public _fru : Fruta

  Registrar(){
    var fru1 = {id:this.id, clave:this.clave, nombre:this.nombre, precio:this.precio};
    console.log(fru1);
    this.frutaService.postFruta(fru1).subscribe(
      data => {
        this._fru=data;
        Swal.fire("Formulario", "Fruta Registrada Correctamente",
      'success');
        //this.frutasService._fru=data;
        console.log(this._fru);
      }
    );

  }

}
