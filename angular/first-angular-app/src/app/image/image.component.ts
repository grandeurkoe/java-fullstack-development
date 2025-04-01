import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  base = "../../assets/images/";
  // imageFront = this.base + "meowya-front-profile.jpg"; 
  // imageBack = this.base + "meowya-back-profile.jpg"; 
  allImages: string[] = [
    this.base + "meowya-front-profile.jpg",
    this.base + "meowya-back-profile.jpg",
  ] 
  cityName: string[] = ["Mumbai", "Pune", "Ambarnath", "Ulhasnagar"];
}
