import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() brandLogo!: string;
  @Input() projectScreenshot!: string;
  @Input() projectTitle!: string;
  @Input() techStack!: string[];
  @Input() githubLink!: string;
  @Input() videoLink!: string;
  @Input() description!: string;
}
