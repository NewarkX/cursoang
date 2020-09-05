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

  students: Observable<User[]>;

  constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
      this.usuarioService.getStudentList().subscribe(data =>{
      this.students = data;
    });
  }

  deleteUsuario(id:Number){
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("retorno do metodo delete: " + data);
      this.usuarioService.getStudentList().subscribe(data =>{
        this.students = data;
      });
    });
  }

}
