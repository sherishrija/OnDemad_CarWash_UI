import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  RegisterForm!:FormGroup;
  Status: string[] = ['Active'];
  default: string = 'Active';
  constructor(private fb:FormBuilder, private auth:AuthService,private router:Router){}
    ngOnInit():void{
      this.RegisterForm=this.fb.group({
        FirstName:['',Validators.required],
        LastName:['',Validators.required],
        PhoneNo:['',Validators.required],
        Email:['',Validators.required],
        Password:['',Validators.required],
        ConfirmPassword:['',Validators.required],
        Address:['',Validators.required],
        Role:['',Validators.required],
        Status:['',Validators.required],
        

      })

    }
    hideShowPass(){
      this.isText=!this.isText;
      this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
      this.isText? this.type="text":this.type="password";
    }
    onregister(){
      if(this.RegisterForm.valid){
        //perform logic for register
        console.log(this.RegisterForm.value)
        this.auth.register(this.RegisterForm.value)
        .subscribe({
          next:(res)=>{
            alert("success"+res.message);
            this.RegisterForm.reset();
            this.router.navigate(['login']);

          }
          ,error:(err=>{
            console.log("error",err);
            alert("error"+err?.error.message)
          })
        })
      }else{
        this.validateAllFormFields(this.RegisterForm)
        alert("Your form is invalid")
        console.log("success");
        //logic for throwing error
        
      }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
    const control = formGroup.get(field);
    if(control instanceof FormControl){
     control.markAsDirty({onlySelf:true});
    }else if(control instanceof FormGroup){
      this.validateAllFormFields(control)
    }
    })
  }
}



