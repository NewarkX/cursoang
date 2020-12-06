import { telefone } from "./telefone";

export class User {
  id:Number;
  login:String;
  nome:String;
  senha:String;
  telefones: Array<telefone>;
}
