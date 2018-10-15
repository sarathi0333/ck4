import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  public upload(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post('/upload', formData)
  }

  public getImages(): Observable<any> {
    return this.http.get('/images')
  }

}
