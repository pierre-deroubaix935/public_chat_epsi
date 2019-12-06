import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from "../user";
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: "Connexion";
  fg: FormGroup;
  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({username: ""});
  }

  connexion()
  {
    let me = new User(this.fg.get("username").value);
    localStorage.setItem("me",me.getName());
    this.router.navigateByUrl('/chat');
  }

}
