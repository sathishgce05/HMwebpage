import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselDataService } from '../services/carousel-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  carouselDisplay:any=[];
  diversityData: any;
  // displaydata:any=[];

  constructor(private carouseldataapi:CarouselDataService,private router:Router) { }
  
    // this.carouselData.carousel().subscribe((data)=>{
    //   this.carousel=data;
  
  

  ngOnInit(): void {
    // debugger
    this.carouseldataapi.getData().subscribe((result:any)=>{
      console.log(result);
      this.carouselDisplay = result.data;
      console.log(result.data);
    })

    this.carouseldataapi.getDiversityData().subscribe((result: any) => {
      this.diversityData = result.mediaInfo;
      console.log(result.mediaInfo)
    })

  }
  recommendMe(){
    this.router.navigate(['/jobrecommender']);
  }
}


