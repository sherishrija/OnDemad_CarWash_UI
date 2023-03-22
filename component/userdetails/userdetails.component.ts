import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public Users:UserModel[] = [];

  userL: UserModel = {
    userId:0,
    firstName:'',
    lastName:'',
    phoneNo:0,
    email:'',
    password:'',
    confirmPassword:'',
    address:'',
    role:'',
    status:'',
  };

  constructor(
    private user:UserdetailsService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    
  }

  //set values 
  SetUserValues(user: UserModel) {
    (this.userL.userId = user.userId),
      (this.userL.firstName = user.firstName),
      (this.userL.lastName = user.lastName),
      (this.userL.phoneNo = user.phoneNo),
      (this.userL.email = user.email),
      (this.userL.password= user.password),
      (this.userL.confirmPassword = user.confirmPassword),
      (this.userL.address = user.address),
      (this.userL.role = user.role),
      


      (this.userL.status = user.status);
  }

  //Method to display all
  getAllUsers() {
    this.user.GetUserModels().subscribe((response) => {
      this.Users = response;
      
    });
  }

  
 

  // Method to delete 
  DeleteUser(user: UserModel) { 
    this.user.DeleteUserModel(user.userId).subscribe((data) => {
      //console.log(data);
      
    });
    this.getAllUsers();
   

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  UpdateUser(usercord: UserModel) {
    console.log('UPDATE USER', usercord.userId, usercord)
    this.user.UpdateUserModel(usercord.userId, usercord).subscribe((data) => {
      console.log(data);
      this.getAllUsers();
    });
   

    
    location.reload();
  }

  LogOut() {
    localStorage.removeItem('');
  }
}


