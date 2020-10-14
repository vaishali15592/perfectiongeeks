import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
userData;
parseData;
show: boolean = false;
  constructor() { }

  ngOnInit() {
    this.userData = localStorage.getItem('user');
    console.log(this.userData);
    this.parseData = JSON.parse(this.userData);
    console.log(this.parseData);
  }

  loadData = () => {
   this.show = true;
  }

}
