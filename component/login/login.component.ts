import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private userStore: UserStoreService,
    
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      //Send the obj to database
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res => {
            // alert(res.message);
            console.log('LOGIN RESPONSE', res)
            console.log('LOGIN FORM', this.loginForm.value)
            alert("login successful");

            this.loginForm.reset();
            this.auth.storeToken(res.token);
            const tokenPayload = this.auth.decodedToken();
            this.userStore.setFulNameForStore(tokenPayload.name);
            this.userStore.setRoleForStore(tokenPayload.role)
            this.router.navigate(['dashboard']);

          })
          , error: (err => {
            alert(err?.error.message)
          })
        })
    } else {

      this.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
}


