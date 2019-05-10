import { Component, OnInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

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
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  teamMembers: Array<TeamMember>;
  showNav = false;
  showMobileNav = false;
  previousHeight: number;
  scrollIndex: number;

  constructor() {
    this.teamMembers = this.getTeamMembers();
    this.scrollIndex = 0;
    this.previousHeight = 0;
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.showNav = false;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    if ((!this.showNav || !this.showMobileNav) && this.scrollIndex > 0) {
      this.showNav = true;
      this.showMobileNav = true;
    }
    this.scrollIndex++;
  }

  getTeamMembers() {
    return [
      {
        name: 'Anisse Gross', 
        position: 'Writer', 
        description: 'Anisse conducts the interviews for 650 Stories. She is a writer and editor living in San Francisco. Her work has been featured in TheNewYorker.com, Quartz, Lucky Peach, The Believer, The Guardian, BuzzFeed, and The San Francisco Chronicle, among many other notable publications.',
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/anisse_portrait360x360.png',
        link: 'http://anissegross.com',
        linkName: 'anissegross.com'
      },
      {
        name: 'Ian Tuttle',
        position: 'Photographer & Producer', 
        description: 'Ian produces the 650 Stories project and photographs the interviewees. He is a commercial and editorial photographer whose clients include Wells Fargo Bank, Outside Magazine, Google, and Lululemon. He lives with his wife in San Francisco.',
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/ian_portrait360x360.png',
        link: 'http://www.ituttle.com',
        linkName: 'ituttle.com'
      },
      {
        name: 'James Hobbs',
        position: 'Designer',
        description: 'James designed the 650 Stories website and brand. Originally from New Zealand, he is currently based in Portland, Oregon where he works as a Design Director. He is currently restoring a historic home with his wife.',
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/james_portrait360x360.jpg',
        link: 'http://octop.us',
        linkName: 'octop.us'
      },
      {
        name: 'Beth Spotswood',
        position: 'Writer', 
        description: "Beth Spotswood is a columnist and writer for the San Francisco Chronicle and the Digital Director and Contributing Writer for the quarterly magazine, Journal of Alta California. She lives in San Francisco's Mission District with her husband and several hundred pounds of unfolded laundry.",
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/beth_portrait360x360.png',
        link: 'http://www.bethspotswood.com',
        linkName: 'bethspotswood.com'
      },
      {
        name: 'Raziel Ungar',
        position: 'Producer',
        description: "Raziel's lifelong love for the peninsula and its history lead him to launch the 650 Stories project. Growing up in Burlingame, he became an Eagle Scout by completing a comprehensive survey of Burlingame's historic homes and buildings. He lives with his wife and son in Burlingame.",
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/raziel_2019portrait360x360.jpg',
        link: 'https://burlingameproperties.com/',
        linkName: 'burlingameproperties.com'
      },
      {
        name: 'Micah Courey',
        position: 'Developer',
        description: 'Micah performs the website development for 650 Stories. He works as a web developer specializing in UI/UX web application design and development. He lives in Portland, Oregon where you can find him cycling around the city or hiking trails in Forest Park.',
        imageUrl: 'https://s3-us-west-1.amazonaws.com/650stories-images/micah_portrait360x360.png',
        link: 'http://micahcourey.com',
        linkName: 'micahcourey.com'
      }
    ];
  }
  
}
