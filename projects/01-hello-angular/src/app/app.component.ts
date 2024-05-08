import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol>
      <li>No excuses</li>
      <li>Rich dad poor dad</li>
      <li>Letter to my son</li>
      <li>Terminator</li>
      <li>The tomorrow war</li>
      <li>Avatar</li>
      <li>I love you</li>
      <li>Congratulation</li>
      <li>Village</li>
    </ol>
  `,
  styles: `ol {list-style-type: upper-roman;}`,
})
export class AppComponent {}
