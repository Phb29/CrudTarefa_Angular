import { style } from '@angular/animations';
import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';
@Component({
  selector: 'app-add-edit-tarefeiro',
  templateUrl: './add-edit-tarefeiro.component.html',
  styleUrls: ['./add-edit-tarefeiro.component.css']
})
export class AddEditTarefeiroComponent implements OnInit {
tarefaList$!:Observable<any[]>;
statusList$!:Observable<any[]>;
tarefaTiposList$!:Observable<any[]>;
  constructor(private service:TarefeiroApiService) { }
@Input()tarefa:any
id:number=0;
status:string="";
comentario:string="";
tarefaTipoId!:number;

  ngOnInit(): void {
    this.id=this.tarefa.id;
    this.status=this.tarefa.status;
    this.comentario=this.tarefa.comentario;
    this.tarefaTipoId=this.tarefa.tarefaTipoId;
    this.statusList$=this.service.getStatusList();
    this.tarefaTiposList$=this.service.getTarefaTiposList();
    this.tarefaList$=this.service.getTarefaList();
  }

  addTarefa(){
   var  tarefa={ status:this.status,
    comentario:this.comentario,
    tarefaTipoId:this.tarefaTipoId

  }
  this.service.addtarefa(tarefa).subscribe(res=>{
    var closeModalBtn=document.getElementById('add-edit-modal-close');
    if(closeModalBtn){
      closeModalBtn.click();
    }
    var showAddSucess=document.getElementById('add-sucess -alert');
    if(showAddSucess){
      showAddSucess.style.display='block';
    }
    setTimeout(function(){
      if(showAddSucess){
      showAddSucess.style.display='none';
    }
    },4000);
    })
  }
  updTarefa(){
    var  tarefa={
      id:this.id,
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId

    }
    var id:number=this.id;
    this.service.updateTarefa(id,tarefa).subscribe(res=>{
      var closeModalBtn=document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showUpdateSucess=document.getElementById('update-sucess-alert');
      if(showUpdateSucess){
        showUpdateSucess.style.display='block';
      }
      setTimeout(function(){
        if(showUpdateSucess){
        showUpdateSucess.style.display='none';
      }
      },4000);
      })

  }
}





