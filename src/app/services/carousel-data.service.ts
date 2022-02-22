import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {
  
  constructor(private http: HttpClient) { }
  // slider1ApiUrl = "https://careers.happiestminds.com/cp/assets/images/home/slider-1.jpg";

  // slider2ApiUrl="https://careers.happiestminds.com/cp/assets/images/home/slider-2.jpg";

  // slider3ApiUrl="https://careers.happiestminds.com/cp/assets/images/home/slider-3.jpg";

  // slider4ApiUrl="https://careers.happiestminds.com/cp/assets/images/home/slider-4.jpg";

  getData(): Observable<any> {
    return this.http.get('https://careerportaltest.happiestminds.com/cp//api/v1/home/carousel');
    }
  // home():Observable<any>{
  //   return this.http.get(this.slider2ApiUrl);
  // }
  // home():Observable<any>{
  //   return this.http.get(this.slider3ApiUrl);
  // }

  // home():Observable<any>{
  //   return this.http.get(this.slider4ApiUrl);
  // }
}
