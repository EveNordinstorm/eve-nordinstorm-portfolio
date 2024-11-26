import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {

}
