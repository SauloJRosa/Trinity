import { Component, OnInit } from '@angular/core';
import { AccountUpdate } from 'app/Models/accountUpdate';
import { commentary } from 'app/Models/commentary';
import { ConnectionApiService } from 'app/services/connection-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  changePassword: boolean = false;

  model = new AccountUpdate('', '', '', '');

  page: Number = 1;
  comentarios: Array<commentary>;
  comentarios$: Observable<any>;

  user: any;
  user$: Observable<any>

  constructor(private service: ConnectionApiService) { }

  ngOnInit() {
    this.comentarios$ = this.service.getCommentaryUser();
    this.user$ = this.service.getUser();
    this.comentarios$.subscribe((data) => {
      this.comentarios = data;
    })
    this.user$.subscribe((data) => {
      this.model.email = data.email;
      this.model.nickname = data.nickname;
    })
  }

  deletarComentario(id: string){
    this.service.deleteCommentary(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  onSubmit(){
    if (this.model.senha == this.model.novaSenha) {

      let updateAccount = {
        novaSenha: this.model.senha,
        nickname: this.model.nickname
      }

      this.service.updateUser(updateAccount).subscribe(data => {
        this.model.nickname = data.nickname;
        this.model.novaSenha = '';
        this.model.senha = '';
        this.changePassword = false;
        this.ngOnInit();
      });
      
    } else {
      console.log("A confirmação da nova senha e a senha passada são diferentes!")
      this.model.novaSenha = '';
      this.model.senha = '';
      this.changePassword = false;
      this.ngOnInit();
    }
  }

}
