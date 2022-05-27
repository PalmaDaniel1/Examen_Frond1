import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';

@Component({
  selector: 'app-mostrar-fruta',
  templateUrl: './mostrar-fruta.component.html',
  styleUrls: ['./mostrar-fruta.component.scss']
})
export class MostrarFrutaComponent implements OnInit {
  //frutas: Fruta[];

  constructor(
    public frutaService: FrutasService,
    public router: Router
    ) { }

  ngOnInit(): void {

    //this.frutaService.buscar_fruta().subscribe

    
    this.frutaService.getFrutas().subscribe((data: Fruta[]) => {
      //this.frutas = data
    },error => console.error(error)
    );

  }

}
