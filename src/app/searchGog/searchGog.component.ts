import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from 'app/Models/Content';
import { Jogo } from 'app/Models/jogo';
import { ConnectionApiService } from 'app/services/connection-api.service';
import { CookieService } from 'ngx-cookie';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-searchGog',
  templateUrl: './searchGog.component.html',
  styleUrls: ['./searchGog.component.scss']
})
export class SearchGogComponent implements OnInit {

  data: Array<any>;
  page: Number = 1;

  jogos$: Observable<Content>;
  error$ = new Subject<boolean>();

  constructor(private service: ConnectionApiService, 
              private router: Router,
              private cookieService: CookieService) {
    this.data = new Array<any>();
   }

  ngOnInit() {

    this.jogos$ = null;
  }

  searchGame(jogo: string){
    event.preventDefault();
    console.log(jogo);
    this.getJogos(jogo);
  }

  getJogos(jogo){
    this.jogos$ = this.service.getData(jogo);
    this.jogos$.subscribe((data) => {
      //console.log(data)
      this.data = data.content
    })
  }

  goToCommentary(jogo: Jogo){
    this.cookieService.remove('jogo');
    this.cookieService.putObject('jogo', jogo);
    this.router.navigate(['/comentarios']);
  }

  getPromocoes(){
    this.jogos$ = this.service.getGogPromo();
    this.jogos$.subscribe((data) => {
      this.data = data.content
    })
  }

}
