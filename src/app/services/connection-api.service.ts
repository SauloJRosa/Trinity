import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../Models/account';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  postId;
  errorMessage;

  private readonly API = 'https://games-plat-api.herokuapp.com/search';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(credentials) : Observable<any>{
  return this.http.post('https://games-plat-api.herokuapp.com/auth', credentials)

  }

  getData(jogo):Observable<any>{

    let rota = this.router.routerState.snapshot.url

    const params = new HttpParams()
        .set('jogo', jogo)
        .set('page', '1')
        .set('size', '30')
        .set('hide', 'dlc');

    if(rota == '/gog' || rota == '/steam' || rota == '/epic' ){
      return this.http.get(`${this.API}${rota}`, {params})
    }

    return this.http.get(`${this.API}`, {params});

  }

  getfreeEpic():Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/search/epicFree'

    return this.http.get(url);
  }

  getEpicPromo():Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/search/epicPromo'

    return this.http.get(url);
  }

  getGogPromo():Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/search/gogPromo'

    return this.http.get(url);
  }

  newAccount(account : Account){

    let url = 'https://games-plat-api.herokuapp.com/user'

    return this.http.post(url, account);
  }

  getCommentary(jogo: string, plataforma: string):Observable<any>{

    let url = 'https://games-plat-api.herokuapp.com/comentarios'

    const params = new HttpParams()
        .set('jogo', jogo)
        .set('plataforma', plataforma);

    return this.http.get(url, {params});
  }

  createCommentary(comentario){
    console.log(comentario);
    return this.http.post('https://games-plat-api.herokuapp.com/comentarios', comentario)
  }

  deleteCommentary(id: string){

    let url = 'https://games-plat-api.herokuapp.com/comentarios';

    return this.http.delete(url + `/${ id }`);
  }

  getCommentaryUser():Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/comentarios/user';
    return this.http.get(url);
  }

  getUser():Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/user';
    return this.http.get(url);
  }

  updateUser(updateAccount):Observable<any>{
    let url = 'https://games-plat-api.herokuapp.com/user';
    return this.http.put(url, updateAccount);
  }

}
