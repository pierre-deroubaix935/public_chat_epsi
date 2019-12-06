import {User} from "./user";

export class Messages {
  contenu:string;
  heure:string;
  sender:User;
  constructor(sender:User, contenu:string)
  {
    this.contenu = contenu;
    this.sender = sender;
    this.heure = new Date().toString();
  }

  getContent()
  {
    return this.contenu;
  }

  getSender()
  {
    return this.sender;
  }
}
