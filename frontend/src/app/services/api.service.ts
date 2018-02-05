import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private dataSub;
  private apiUrl: string;
  private data: Array<any>;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://localhost:1337/';
  }

  extractData(res: Response) {
    console.log('res', res);
    return res || {};
  }

  getData(route: string) {
    return this.http.get(this.apiUrl + route)
      .map(this.extractData)
  }

  getInterviews() {
    const interviews = [];
    this.getData('interview').subscribe((data: Array<any>) => {
      console.log(data);
      data.forEach(interview => {
        interviews.push(interview);
      })
    })
    return interviews;
  }

}

