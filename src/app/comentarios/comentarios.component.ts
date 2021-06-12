import { sendCommentary } from './../Models/sendCommentary';
import { commentary } from './../Models/commentary';
import { Jogo } from './../Models/jogo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionApiService } from '../services/connection-api.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  jogo: any;

  page: Number = 1;
  data: Array<commentary>;
  comentarios$: Observable<any>;

  model = new sendCommentary('', '', '', '1');
  currentRate = 1;

  created = false;
  submitted = false;

  constructor(private service: ConnectionApiService, private cookieService: CookieService) { }

  ngOnInit() {
    this.jogo = this.cookieService.getObject('jogo');
    //this.jogo = history.state.jogo;
    //localStorage.setItem('jogo', this.jogo);
    this.created = false;
    let jogoAjustado = this.jogo.titulo.replace(/[^a-zA-Z0-9 ]/g, "");
    this.comentarios$ = this.service.getCommentary(jogoAjustado, this.jogo.plataforma);
    this.comentarios$.subscribe((data) => {
      this.data = data;
    })
  }

  enviarComentario(){

    let jogoAjustado = this.jogo.titulo.replace(/[^a-zA-Z0-9 ]/g, "");


    let Comentario = {
      plataforma: this.jogo.plataforma,
      jogo: jogoAjustado,
      comentario: this.model.comentario,
      nota: this.model.nota
    }

    //console.log(Comentario);

    this.service.createCommentary(Comentario).subscribe(data => {
      //console.log(data);
      this.created = true;
      this.model.comentario = "";
      this.model.nota = "1";
      document.querySelector('.main-content').scrollTop;
      this.ngOnInit();

    });
  }

  deletarComentario(id: string){
    this.service.deleteCommentary(id).subscribe(data => {
      this.ngOnInit();
    });

  }

}
