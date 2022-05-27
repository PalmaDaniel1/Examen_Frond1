import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';



@Component({
  selector: 'app-buscar-fruta',
  templateUrl: './buscar-fruta.component.html',
  styleUrls: ['./buscar-fruta.component.scss']
})
export class BuscarFrutaComponent implements OnInit {

  clave:string;
  frutas: Fruta;
  

  constructor(
    public fruService: FrutasService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
    
  buscar(){
    this.fruService.buscar_fruta(this.frutas.clave=  this.clave).subscribe((data: Fruta) => {
      this.frutas = data
    },error => console.error(error)
    );
    }
  }


