import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';

@Component({
  selector: 'app-listar-frutas',
  templateUrl: './listar-frutas.component.html',
  styleUrls: ['./listar-frutas.component.scss']
})
export class ListarFrutasComponent implements OnInit {

  frutas: Fruta[];
  constructor(
    public frutaService: FrutasService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.frutaService.getFrutas().subscribe((data: Fruta[]) => {
      this.frutas = data
    },error => console.error(error)
    );
  }

}
