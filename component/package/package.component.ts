import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PackageModel } from 'src/app/models/packagedetails.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
  
export class PackageComponent {
  public packages:PackageModel[] = [];

  packageL: PackageModel = {
    id:0,
    name:'',
    price:'',
    status:'',
  };

  constructor(
    private pack:PackageService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllPackages();
    //console.log(this.drugs);
  }

  //set values to the drug
  SetPackageValues(pack: PackageModel) {
    (this.packageL.id = pack.id),
      (this.packageL.name = pack.name),
      (this.packageL.price = pack.price),
      (this.packageL.status = pack.status);
  }

  //Method to display all the drugs
  getAllPackages() {
    this.pack.GetPackageModels().subscribe((response) => {
      this.packages = response;
      //console.log(this.drugs);
    });
  }


  LogOut() {
    localStorage.removeItem('');
  }

  select(id:number){
    this.router.navigate(['add-order',id])
  }
}


