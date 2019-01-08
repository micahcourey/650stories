import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { secrets } from '../../secrets'

@Injectable()
export class ApiService {
  private dataSub;
  private apiUrl: string;
  private data: Array<any>;
  private interviews: Array<any>;
  private interviewsSub;
  private boxColors: Array<any>;
  private key: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://650stories.com/';
    this.interviews = [];
    this.boxColors = ['#1cb1d7', '#58e2b0', '#ffcf2d'];
    this.key = secrets.key;
  }

  private getOptions() {
    return { headers: new HttpHeaders().set('append', `key=${this.key}`)};
  }

  extractData(res: Response) {
    return res || {};
  }

  getData(route: string) {
    return new Promise((resolve, reject) => {
      this.interviewsSub = this.http.get(this.apiUrl + route).map(this.extractData).toPromise();
      this.interviewsSub.then((res) => {
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
        this.interviews.sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return a > b ? -1 : a < b ? 1 : 0;
        });
        this.setColors();
        this.setSlug();
        // console.log('interviews', this.interviews);
        return resolve(data);
      });
    });
  }

  getInterview(interviewSlug) {
    return new Promise((resolve, reject) => {
      this.getInterviews().then((interviews: any) => {
        this.interviews = interviews;
        const requestedInterview = this.interviews.find(interview => interview.slug === interviewSlug);
        const i = this.interviews.indexOf(requestedInterview);
        let nextInterview = this.interviews[i + 1];
        if (nextInterview === undefined) {
          nextInterview = this.interviews[0];
        }
        return resolve([requestedInterview, nextInterview]);
      });
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
  }

  setSlug() {
    this.interviews.forEach(interview => {
      interview.slug = interview.interviewee_first_name + '_' + interview.interviewee_last_name;
    });
  }

}

