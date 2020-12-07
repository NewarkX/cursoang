import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {
  }

   getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  getStudent(id: String): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id );
  }

  deletarUsuario(id: Number) : Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id,{responseType: 'text'});
  }

  consultarUser(nome:String) : Observable<any>{
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  salvarUsuario(user: User): Observable<any>{
    return this.http.post<any>(AppConstants.baseUrl,user);
  }

  atualizarUsuario(user): Observable<any>{
    return this.http.put<any>(AppConstants.baseUrl,user);
  }

  removerTelefone(id): Observable<any>{
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id,{responseType: 'text'});
  }

  userAutenticado(){
    if(localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null ){
      return true;
    }else{
      return false;
    }
  }

}
