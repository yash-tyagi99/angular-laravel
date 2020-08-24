import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../employee/employee.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   
  
  editData(employee: Employee) {
    throw new Error("Method not implemented.");
  }
  data:any;
  constructor(
    private httpClient:HttpClient
  ) { }
  getData()
  {
    return this.httpClient.get('http://127.0.0.1:8000/employee');
  }

  insertData(data)
  {
    return this.httpClient.post('http://127.0.0.1:8000/addemployee',data);
  }

  deleteData(id)
  {
    return this.httpClient.delete('http://127.0.0.1:8000/deleteemployee/'+id);
  }

  getOneEmployee(id)
  {
    return this.httpClient.get('http://127.0.0.1:8000/getoneemployee/'+id);
  }

  updateData(id,data)
  {
    return this.httpClient.patch('http://127.0.0.1:8000/updateemployee/'+id,data);
  }
  
 
}
