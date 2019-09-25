import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild } from '@angular/core';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  isCollapsed = false;
  constructor(private _ngZone: NgZone) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onSubmit(form: NgForm){
    alert('Thanks for your info. But this is actually a fake page. I personally do not collect any information.');
    this.isCollapsed = true;
    form.resetForm();
  }


  ngOnInit() {
  }

}
