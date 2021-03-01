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
}
