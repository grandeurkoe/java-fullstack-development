import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-assignment-app';
  selectedForeground = "#000000";
  selectedBackground = "#FFFFFF";
  onChangeForeground(event: any) {
    this.selectedForeground = event.target.value;
  }
  onChangeBackground(event: any) {
    this.selectedBackground = event.target.value;
  }
}
