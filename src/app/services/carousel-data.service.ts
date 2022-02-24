import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarouselDataService {
  
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('https://careerportaltest.happiestminds.com/cp//api/v1/home/carousel');
    }

    getDiversityData() {
      return this.http.get('https://careerportaltest.happiestminds.com/cp/api/v1/home/diversity-gallery')
    }
  
}
