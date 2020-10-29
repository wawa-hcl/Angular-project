import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name =""
  username = ""
  email = ""
  password = ""
  address = ""
  pincode = ""


  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }
  handleRegistration(){
    this.router.navigate(['/welcome'])
    console.log(this.name)
    console.log(this.username)
    console.log(this.password)
    console.log(this.address)
    console.log(this.pincode)
  }

}
