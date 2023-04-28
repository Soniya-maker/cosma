import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl?: string; 
    
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.loginStatus = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  console.log( this.loginForm)

  // reset login status
 // this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm!.controls; }

  onSubmit() {
    this.commonService.loginStatus = true;
    this.router.navigate(['\home'])
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm?.invalid) {
          return;
      }
  }
}
