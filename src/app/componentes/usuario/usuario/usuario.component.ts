import { AppConstants } from './../../../app-constants';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User[]>;
  nome: String;
  total: Number;
  p: number = 1;

  constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
      this.usuarioService.getStudentList().subscribe(data =>{
      this.students = data.content;
      this.total = data.totalElements;
    });
  }

  deleteUsuario(id:Number,index){

    if(confirm('Deseja mesmo remover?')){
      this.usuarioService.deletarUsuario(id).subscribe(data => {

        this.students.splice(index,1); /* remove da tela */
        //console.log("retorno do metodo delete: " + data);
        //this.usuarioService.getStudentList().subscribe(data =>{
        //  this.students = data;
       // });
      });
    }
  }

  consultarUser(){
    if(this.nome === ''){
      this.usuarioService.getStudentList().subscribe(data =>{
        this.students = data.content;
        this.total = data.totalElements;
      });
    }else{
      this.usuarioService.consultarUser(this.nome).subscribe(data =>{
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }

  carregarPagina(pagina){

    if(this.nome !== ''){
      this.usuarioService.consultarUserPorPage(this.nome,(pagina - 1)).subscribe(data =>{
        this.students = data.content;
        this.total = data.totalElements;
      });
    }else{
      this.usuarioService.getStudentListPage(pagina - 1).subscribe(data =>{
        this.students = data.content;
        this.total = data.totalElements;
       });
    }
  }
}
