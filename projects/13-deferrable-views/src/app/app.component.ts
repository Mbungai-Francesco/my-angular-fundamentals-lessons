import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts >Load Posts</button>
      <button  (click)="handleClick()" >Click me</button>
      @defer (on interaction(loadPosts); when count == 0){
        <app-posts />
      }@loading {
        <p>Loading ⌛</p>
      }
      @placeholder {
        @if(count%2 == 0){<p>More time ⌛ {{count}}</p>}
        @else{<p>Less time ⌛ {{count}}</p>}
      }
    </section>
  `,
})
export class AppComponent {
  count: number = 5
  handleClick() {
    this.count--
  }
}
