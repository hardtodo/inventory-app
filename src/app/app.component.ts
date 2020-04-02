import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  imgUrl:string;

  constructor()
  {
    this.title='hello';
    this.imgUrl='/assets/imgs/ng-book2.png';
  }
}
