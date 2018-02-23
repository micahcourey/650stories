import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  link: string;
  linkName: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  teamMembers: Array<TeamMember>;

  constructor() { 
    this.teamMembers = [
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: '',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      },
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: '',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      },
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: '',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      },
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: '',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      },
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: '',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      }
      
    ];
  }

  ngOnInit() {
  }

}
