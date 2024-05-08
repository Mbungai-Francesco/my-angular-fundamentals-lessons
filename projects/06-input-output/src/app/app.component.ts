import { Component } from '@angular/core';
import {ListingComponent} from './listing/listing.component';
import { Car } from './car';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for (cars of carList; track cars) {
        <app-listing [car]="cars" (carSaved) = " addCarToSaved($event) " (carDeleted) = "removeCarFromSaved($event)"/>
      }
    </section>
  `,
  styles: [],
  imports: [ListingComponent],
})
export class AppComponent {
  savedCarList: Car[] = [];
  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
    console.log("saved", this.savedCarList);
  }
  removeCarFromSaved(car: Car) {
    var val : number = this.savedCarList.findIndex((savedCar) => savedCar === car)
    console.log("val ",val);
    
    this.savedCarList.splice(val, 1);
    console.log("deleted", this.savedCarList);
  }
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
      saved: false,
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      saved: false,
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      saved: false,
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
      saved: false,
    },
  ];
}
