import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private dataSub;
  private apiUrl: string;
  private data: Array<any>;
  private interviews: Array<any>;
  private interviewsSub;
  private boxColors: Array<any>;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://159.65.78.102/';
    this.interviews = [];
    this.boxColors = ['#1cb1d7', '#58e2b0', '#ffcf2d'];
  }

  getOptions() {
    return { headers: new HttpHeaders().set('append', 'key=AIzaSyA5dg6bA_5AhoNl3DkqPxdN1nxfUPk68W0')};
  }

  extractData(res: Response) {
    console.log('res', res);
    return res || {};
  }

  getData(route: string) {
    return new Promise((resolve, reject) => {
      this.interviewsSub = this.http.get(this.apiUrl + route).map(this.extractData).toPromise();
      console.log('got the interviews!');
      this.interviewsSub.then((res) => {
        console.log(res)
        resolve(res);
        return;
      }, rej => {
        console.log(rej);
      });
    });
  }

  getInterviews() {
    return new Promise((resolve, reject) => {
      this.getData('interview').then((data: Array<any>) => {
        this.interviews = data;
        this.setColors();
        console.log('interviews', this.interviews);
        return resolve(data);
      });
    });
  }

  getInterview(interviewId) {
    return new Promise((resolve, reject) => {
      // if (!this.interviews.length) {
        this.getInterviews().then((interviews: any) => {
          this.interviews = interviews;
          const requestedInterview = this.interviews.find(interview => interview.id === interviewId);
          console.log(requestedInterview);
          return resolve(requestedInterview);
        });
      // } else {
      //   return this.interviews.find(interview => +interview.id === +interviewId);
      // }
    });
  }

  setColors() {
    let i = 0;
    this.interviews.forEach(interview => {
      interview.color = this.boxColors[i];
      i++;
      if (i === 3) {
        i = 0;
      }
    });
    console.log('intervies => ', this.interviews);
  }

}

