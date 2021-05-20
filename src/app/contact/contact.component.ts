import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SendEmailService } from '../services/contact/send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  send = false;
  errorMessage ='';

  contactForm = this.fb.group({
    name:['',[Validators.minLength(3), Validators.maxLength(15), Validators.required]],
    email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required]],
    subject:['',[Validators.minLength(4),Validators.maxLength(50),Validators.required]],
    message:['',[Validators.minLength(10),Validators.maxLength(200),Validators.required]]
  });
  constructor(private fb: FormBuilder, private sendService: SendEmailService) { }

  ngOnInit(): void {

  }
  
  enviar() : void{
  
    this.send=true;
      
    this.sendService.send(this.contactForm.value)
    .subscribe(
      data=> console.log('Success', data),
      error => this.errorMessage = error.statusText, 
    );

    this.contactForm.reset();
  }

}
