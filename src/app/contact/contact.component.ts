import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;



  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Moje ime: ${this.name}, moj email: ${this.email} i moja poruka: ${this.message}`
    alert(message);
   

  }

}
