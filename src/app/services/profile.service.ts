import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username: string;
  private clientid = '';
  private clientsecret = '';
  
  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'verowangari';
  }
  getProfileInfo() {
    return this.http
      .get(
        'https://api.github.com/users/verowangari' +
          this.username +
          '?client_id=' +
          this.clientid +
          '&client_secret=' +
          this.clientsecret
      )
      map((res: { json: () => any }) => res.json());
      
  }
}
