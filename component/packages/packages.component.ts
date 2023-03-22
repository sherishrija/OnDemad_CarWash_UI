import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PackageModel } from 'src/app/models/packagedetails.model';
import { PackageserviceService } from 'src/app/services/packageservice.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{
  public packages:PackageModel[] = [];

  packageL: PackageModel = {
    id:0,
    name:'',
    price:'',
    status:'',
  };

  constructor(
    private pack:PackageserviceService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllPackages();
    
  }

  //set values
  SetPackageValues(pack: PackageModel) {
    (this.packageL.id = pack.id),
      (this.packageL.name = pack.name),
      (this.packageL.price = pack.price),
      (this.packageL.status = pack.status);
  }

  //Method to display all
  getAllPackages() {
    this.pack.GetPackageModels().subscribe((response) => {
      this.packages = response;
      
    });
  }

  //Method to add
  onSubmit() {
    console.log('ADD PACKAGE',this.packageL);
    this.pack.AddPackageModels(this.packageL).subscribe((Response) => {
      console.log(Response);
    });
    
    this.getAllPackages();

   

    window.location.href = '/packages'

    location.reload();
  }

  // Method to delete 
  DeletePackage(pack: PackageModel) { 
    this.pack.DeletePackageModel(pack.id).subscribe((data) => {
      //console.log(data);
      this.getAllPackages();
    });
    
    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  UpdatePackage(packagerecord: PackageModel) {
    this.pack.UpdatePackageModel(packagerecord.id, packagerecord).subscribe((data) => {
      console.log(data);
    });

    

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  LogOut() {
    localStorage.removeItem('');
  }
}
