import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('video') videoRef: ElementRef;
  videoElement: HTMLVideoElement | any;
  constructor( 
    private route: Router
  ) { }

  ngOnInit() {

  setTimeout(() => {
     this.route.navigateByUrl('/tab2');
   }, 15500);

  }



}
