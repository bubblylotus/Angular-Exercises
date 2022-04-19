import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  forbiddenProjectName = 'Test';

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      //no Validators.required() bc don't want to execute, just pass reference to it so angular can do that
      //this.forbiddenName.bind(this)]
      'projectName': new FormControl(null, Validators.required, CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.projectForm);
  }
  // validator returns key: value pair of validation name/string and the value

  // forbiddenName(control: FormControl): {[s: string]: boolean}{
  //   if(this.forbiddenProjectName === control.value){
  //     return {"nameIsForbidden": true};
  //   }
  //   //if validation passed, return null
  //   return null;
  // }

}
