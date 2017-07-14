import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ManagementComponent } from './pages/management/management.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [ 
   { path: '', redirectTo: '/Home', pathMatch: 'full' },
   { path: 'Home', component: HomeComponent },
   { path: 'About', component: AboutComponent },
   { path: 'Management', component: ManagementComponent },
   { path: 'Contact', component: ContactComponent }
];