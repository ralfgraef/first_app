import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  items: string[] = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    console.log("Hier Aufruf von addItem");
    this.items.push(newItem);
  }
}
