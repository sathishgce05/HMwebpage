import { Component, OnInit } from '@angular/core';
import { CarouselDataService } from '../services/carousel-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  carouselDisplay:any=[];
  // displaydata:any=[];

  constructor(private carouseldataapi:CarouselDataService) { }
  
    // this.carouselData.carousel().subscribe((data)=>{
    //   this.carousel=data;
  
  

  ngOnInit(): void {
    // debugger
    this.carouseldataapi.getData().subscribe((result:any)=>{
      console.log(result);
      this.carouselDisplay = result.data;
      console.log(result.data);
    })
  }
}


