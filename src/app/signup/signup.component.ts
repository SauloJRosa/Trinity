import { Observable } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Account } from './../Models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  model = new Account('', '', '', 'NATIVO');
  created = false;

  submitted = false;

  constructor(private service: ConnectionApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    event.preventDefault();

    this.submitted = true;
    this.service.newAccount(this.model).subscribe(data => {
      //console.log(data);
      this.created = true;
    });
  }

}

