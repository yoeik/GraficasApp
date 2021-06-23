import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  // baseUrl:
  constructor(private http:HttpClient) { }

getUserRS(){
  return this.http.get('http://localhost:3000/grafica')
  
}

getUserRSDona(){
  return this.getUserRS()
  .pipe(
    delay(1000),
    map(data => {
      const labels= Object.keys(data);
      const values= Object.values(data);
      return {labels,values};
    })
    
  )
}
}
