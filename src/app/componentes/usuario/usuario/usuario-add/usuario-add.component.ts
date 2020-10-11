import { UsuarioService } from './../../../../service/usuario.service';
import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(private routeActive: ActivatedRoute,private userService: UsuarioService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null){
      this.userService.getStudent(id).subscribe(data =>{
        this.usuario = data;
      });
    }
  }

  salvarUsuario(){
    if(this.usuario.id != null && this.usuario.id.toString().trim() != null ){
      this.userService.atualizarUsuario(this.usuario).subscribe(data =>{
        this.novo();
        console.info("user atualizado " + data);
      });
    }else{
      this.userService.salvarUsuario(this.usuario).subscribe(data =>{
        this.novo();
        console.info("user salvo " + data);
      });
    }
  }

  novo(){
    this.usuario = new User();
  }

}
