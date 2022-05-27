import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutasService } from 'src/app/frutas/frutas.service';
import { Fruta } from 'src/app/others/fruta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    public _frutaService: FrutasService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  public _fru : Fruta[]

  leerFichero(){
    this._frutaService.leerFichero().subscribe(data => {
      this._frutaService._fru2=data;
      this.router.navigateByUrl("/listar_frutas");
    });

  }

}
