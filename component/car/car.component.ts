import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public Cars:CarModel[] = [];

  carL: CarModel = {
    id:0,
    model:'',
    status:'',
  };

  constructor(
    private car:CarService ,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllCars();
    
  }

  //set values 
  SetCarValues(car: CarModel) {
    (this.carL.id = car.id),
      (this.carL.model = car.model),
      (this.carL.status = car.status);
  }

  //Method to display all 
  getAllCars() {
    this.car.GetCarModels().subscribe((response) => {
      this.Cars = response;
     
    });
  }

  //Method to add 
  onSubmit() {
    console.log(this.carL);
    this.car.AddCarModels(this.carL).subscribe((Response) => {
      console.log(Response);
    });
    
    this.getAllCars();

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  // Method to delete 
  DeleteCar(car: CarModel) { 
    this.car.DeleteCarModel(car.id).subscribe((data) => {
      //console.log(data);
      this.getAllCars();
    });
    

    //function to delay the code for 3 seconds to show the message
    function delay(time: any) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(4000).then(() => console.log('ran after 1 second1 passed'));

    location.reload();
  }

  UpdateCar(carcord: CarModel) {
    this.car.UpdateCarModel(carcord.id, carcord).subscribe((data) => {
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
