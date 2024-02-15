import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url = environment.url
  private token = 'dDMlouQp5yjNU6YMJkJEoL4W0nW0rZKIQkV_bfUN'
  private RETRY = 3
  options = {
    headers:{
      'xc-token':`${this.token}`
    }
  }

  convertImgArray(foto: any): Array<Image>{
    if(!foto) return new Array()

    return foto.map((novaFoto: any)=>{
      return new Image().deserilize({
        minetype:novaFoto.minetype,
        url:novaFoto.url,
        title:novaFoto.title,
        size:novaFoto.size
      })
    })
  }

  getPaciente():Observable<Array<Paciente>>{
    return this.http.get<any>(`${this.url}`)
  }

  constructor(private http:HttpClient) { }
}
