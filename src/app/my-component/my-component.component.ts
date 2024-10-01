import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  // Interpolation and Property Binding example
  title = 'One Way Data Binding Example';
  
  // Event Binding example
  count = 0;
  
  incrementCount() {
    this.count++;
  }

  getTitle() {
    return this.title;
  }
}
