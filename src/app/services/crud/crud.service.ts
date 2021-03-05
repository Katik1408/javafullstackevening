import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiURL;
const GETALLSTUDENTS = '/api/students';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  getAllStudent() {
    return this.httpClient.get(`${API_URL}${GETALLSTUDENTS}`);
  }

  deleteStudent(id) {
    return this.httpClient.delete(`${API_URL}${GETALLSTUDENTS}/${id}`);
  }

  //Creating a Post Request for creating new Student

  addNewStudent(values) {
    return this.httpClient.post(`${API_URL}${GETALLSTUDENTS}`, values);
  }

  editStudent(id,values){
    return this.httpClient.put(`${API_URL}${GETALLSTUDENTS}/${id}`, values)
  }
}
