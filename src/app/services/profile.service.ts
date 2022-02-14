import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private username: string;
  private clientid = '754b28b2c2e46c941de9';
  private clientsecret = 'fdfea0215749cea8ae727701f79595dc0a5e295f';
  
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
