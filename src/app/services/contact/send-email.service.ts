import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactFormValue } from 'src/app/interfaces/contact-form-value';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  // _url = 'http://localhost/PHPmailer/email.php';
  _url = 'phpmailer/email.php';

  constructor(private _http: HttpClient) { }

  send(dataForm: ContactFormValue){
    return this._http.post<any>(this._url, dataForm)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

 

}
