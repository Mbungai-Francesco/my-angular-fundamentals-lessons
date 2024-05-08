import { Component, Input , Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';
// import {  } from '@angular/core';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <!-- This article element represents and entire listing -->
  <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{car.make}} {{car.model}}</p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span>{{car.year}}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{car.transmission}}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{car.miles}}</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>{{car.price}}</span>
        </p>
      </section>
      <div class="btns">
        <button (click)="handleCarSaved()" >Save</button>
        <button [hidden]="!car.saved" (click)="handleCarDelete()" >Delete</button>
      </div>
    </article>
    <!-- end car listing markup -->
   `,
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  // @Input() car: Car = {} as Car;
  @Input({required: true}) car!: Car;

  @Output() carSaved = new EventEmitter<Car>();

  @Output() carDeleted = new EventEmitter<Car>();

  handleCarSaved() {
    if (!this.car.saved) {
      this.car.saved = true
      this.carSaved.emit(this.car);
    }
  }

  handleCarDelete() {
    if (this.car.saved) {
      this.car.saved = false
      this.carDeleted.emit(this.car);
    }
  }
}
