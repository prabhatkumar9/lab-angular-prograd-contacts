import { Component, OnInit } from '@angular/core';
import { contacts } from './../contact';
import { userContact } from './../userContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() { }


  ngOnInit(): void {
    // initialize your contacts here
    this.contacts = contacts;
  }
  addContact(newContact): any {
    console.log(newContact);
    this.contacts.push(newContact);
    // Fill your code here
    // add contact to contacts list
    // clear inputs

  }

}




