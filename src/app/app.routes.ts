import { Routes } from '@angular/router';
import { OverviewComponent } from '../pages/overview/overview.component';
import { WebDevelopmentComponent } from '../pages/web-development/web-development.component';
import { UXDesignComponent } from '../pages/ux-design/ux-design.component';
import { GraphicDesignComponent } from '../pages/graphic-design/graphic-design.component';
import { MarketingComponent } from '../pages/marketing/marketing.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'ux-design', component: UXDesignComponent },
  { path: 'graphic-design', component: GraphicDesignComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: '**', redirectTo: '' }, // Wildcard route
];
