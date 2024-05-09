import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 
    <h1>Welcome to {{ title }}!</h1> 
    <ul>
      @for (item of productTitles; track $index) {
        <a [routerLink]="['details',$index]" ><li>{{ item }}</li></a>
      }
    </ul>
    <a [routerLink]="['']">Back home</a>
    <router-outlet/>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
