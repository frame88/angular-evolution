import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}
@Component({
  selector: 'app-first-c-tailwind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-c-tailwind.component.html',
  styleUrls: ['./first-c-tailwind.component.scss']
})
export class FirstCTailwindComponent {
  alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }
}
