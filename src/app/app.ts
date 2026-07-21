import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// ...
import { BrMenu, BrMenuItem, BrMenuList } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-root',
  imports: [BrMenu, BrMenuItem, BrMenuList, RouterOutlet],
// ...
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angles');
}
