import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {
readonly TarefeiroApiUrl="https://localhost:7074/api";
  constructor(private http:HttpClient) { }

  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.TarefeiroApiUrl+'/tarefas');

  }
  addtarefa(data:any){
    return this.http.post(this.TarefeiroApiUrl+ '/tarefas',data)
  }
  updateTarefa(id:number|string,data:any){
  return this.http.put(this.TarefeiroApiUrl+ `/tarefas/${id}`,data);
  }
  deleteTarefa(id:number|string){
    return this.http.delete(this.TarefeiroApiUrl+ `/tarefas/${id}`);
    }

    //Tarefa Tipos

    getTarefaTiposList():Observable<any[]>{
      return this.http.get<any>(this.TarefeiroApiUrl+'/tarefaTipos');

    }
    addtarefaTipos(data:any){
      return this.http.post(this.TarefeiroApiUrl+ '/tarefaTipos',data)
    }
    updateTarefaTipos(id:number|string,data:any){
    return this.http.put(this.TarefeiroApiUrl+ `/tarefaTipos/${id}`,data);
    }
    deleteTarefaTipos(id:number|string,data:any){
      return this.http.delete(this.TarefeiroApiUrl+ `/tarefaTipos/${id}`,data);
      }
//Status

getStatusList():Observable<any[]>{
  return this.http.get<any>(this.TarefeiroApiUrl+'/status');

}
addStatus(data:any){
  return this.http.post(this.TarefeiroApiUrl+ '/status',data)
}
updateStatus(id:number|string,data:any){
return this.http.put(this.TarefeiroApiUrl+ `/status/${id}`,data);
}
deleteStatus(id:number|string,data:any){
  return this.http.delete(this.TarefeiroApiUrl+ `/status/${id}`,data);
  }
}
