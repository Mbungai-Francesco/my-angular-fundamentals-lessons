import { Component, inject } from '@angular/core';
import { User } from './data';
import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';
;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: ` 
    <h1>User Listing</h1> 
    @for (users of userData; track users.id) {
      <app-user-info [user] = "users"></app-user-info>
    }
    `,
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = []

  constructor() {
    this.userService.getUserData().then(data => {
      this.userData = data
    })
  }
}
