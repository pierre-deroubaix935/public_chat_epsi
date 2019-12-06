import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {LoginComponent} from "../login/login.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Messages} from "../messages";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private users = [];
  private msgs = [];
  public me:User;
  fg: FormGroup;
  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({message:""})
    let meName = localStorage.getItem("me");
    if(meName !== undefined)
    {
      this.me = new User(meName);
      this.users.push(this.me);
    }else {
      this.router.navigate(["login"]);
    }
  }

  sendMsg()
  {
    let msg = new Messages(this.me,this.fg.get("message").value);
    this.msgs.push(msg);
    this.fg.setValue({message:""});
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
