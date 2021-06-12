import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from 'app/Models/Content';
import { Jogo } from 'app/Models/jogo';
import { ConnectionApiService } from 'app/services/connection-api.service';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Array<any>;
  dataEpicPromo: Array<any>; 
  dataGogPromo: Array<any>;
  page: Number = 1;

  jogosFreeEpic$: Observable<Content>;
  jogosSteamPromo$: Observable<Content>;
  jogosEpicPromo$: Observable<Content>;
  jogosGogPromo$: Observable<Content>;

  constructor(private service: ConnectionApiService,
              private router: Router, 
              private cookieService: CookieService) { }

  ngOnInit() {

    this.jogosFreeEpic$ = this.service.getfreeEpic();
    this.jogosFreeEpic$.subscribe((data) => {
      this.data = data.content
    })

    this.jogosEpicPromo$ = this.service.getEpicPromo();
    this.jogosEpicPromo$.subscribe((data) => {
      this.dataEpicPromo = data.content
    })

    this.jogosGogPromo$ = this.service.getGogPromo();
    this.jogosGogPromo$.subscribe((data) => {
      this.dataGogPromo = data.content
    })

  }

  goToCommentary(jogo: Jogo){
    this.cookieService.remove('jogo');
    this.cookieService.putObject('jogo', jogo);
    //this.router.navigate(['/comentarios'], {state: {jogo}});
    this.router.navigate(['/comentarios']);
  }

}
