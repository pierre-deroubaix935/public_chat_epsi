export class User {
  pseudonyme:string;

  constructor(name:string)
  {
    this.pseudonyme = name;
  }

  public getName()
  {
    return this.pseudonyme;
  }
}
