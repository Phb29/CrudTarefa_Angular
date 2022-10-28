import { TarefeiroApiService } from './../../tarefeiro-api.service';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-tarefeiro',
  templateUrl: './show-tarefeiro.component.html',
  styleUrls: ['./show-tarefeiro.component.css']
})
export class ShowTarefeiroComponent implements OnInit {
  tarefeiroList$!:Observable<any[]>;
  tarefeiroTiposList$!:Observable<any[]>;
  tarefeiroTiposList:any=[];
  //Map mostrar associação entre tabela
  tarefeiroTipoosMap:Map<Number,string>=new Map()


  constructor(private service:TarefeiroApiService) { }

  ngOnInit(): void {
    this.tarefeiroList$=this.service.getTarefaList();
    this.tarefeiroTiposList$=this.service.getTarefaTiposList();
    this.refrestarefeiroTiposMap();

  }
  //variáveis (propriedade)
  modalTitle:string='';
  activateAddEditTarefeiroComponent:boolean=false;
  tarefeiro:any;

  modelApp(){
    this.tarefeiro={
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle="Nova Tarefa";
    this.activateAddEditTarefeiroComponent=true;
  }
  modalEdit(item:any){
    this.tarefeiro=item;
    this.modalTitle="edição tarefa"
    this.activateAddEditTarefeiroComponent=true;

  }



  delete(item:any){
    if(confirm(`Você tem certeza que quer deletar ${item.id}?`)){

    this.service.deleteTarefa(item.id).subscribe(res=>{
      var closeModalBtn=document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showdeleteSucess=document.getElementById('delete-sucess-alert');
      if(showdeleteSucess){
        showdeleteSucess.style.display='block';
      }
      setTimeout(function(){
        if(showdeleteSucess){
        showdeleteSucess.style.display='none';
      }
      },4000);
      })

  }
    }

  modalClose(){
    this.activateAddEditTarefeiroComponent=false;
    this.tarefeiroList$=this.service.getTarefaList();
  }

refrestarefeiroTiposMap(){
  this.service.getTarefaTiposList().subscribe(data=>{
    this.tarefeiroTiposList=data;

    for(let i=0;i<data.length;i++){
      this.tarefeiroTipoosMap.set(this.tarefeiroTiposList[i].id,this.tarefeiroTiposList[i].tarefaNome)
    }
  })
}
}
