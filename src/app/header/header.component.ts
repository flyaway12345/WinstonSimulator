import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showPanel: boolean = false;

  onClick(){
    if(this.showPanel == false){
      this.showPanel = true;
    }else{
      this.showPanel = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
