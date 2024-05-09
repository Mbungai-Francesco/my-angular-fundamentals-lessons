import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="inputTitle">Post Title</label>
        <input type="text" name="" id="inputTitle" [(ngModel)] = "inputTitle">

        <label for="body">Post Body</label>
        <textarea name="" id="body" [(ngModel)] = "body" ></textarea>

      </section>
      <section>
        <p>{{inputTitle}}</p>
        <p>{{body}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  inputTitle : string = '';
  body : string = '';
}
