import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('spinAnimation', [
      transition('* => *', [
        animate(
          '1.8s',
          keyframes([
            style({ transform: 'rotateY(0deg)', offset: 0 }),
            style({ transform: 'rotateY(180deg)', offset: 0.5 }),
            style({ transform: 'rotateY(360deg)', offset: 1 }),
          ])
        ),
      ]),
    ]),
    // Fade-in from left to right without movement
    trigger('fadeInFromLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          clipPath: 'inset(0 100% 0 0)', // Clip the right side of the image
        }),
        animate(
          '1.8s ease-in-out', // Easing in and out for smoother transitions
          style({
            opacity: 1,
            clipPath: 'inset(0 0 0 0)', // Reveal the whole image
          })
        ),
      ]),
    ]),
  ],
})
export class OverviewComponent {
  animationState = false;

  ngOnInit(): void {
    this.triggerAnimation();
  }

  triggerAnimation(): void {
    this.animationState = !this.animationState; // Toggle state to trigger the animation
  }
}
