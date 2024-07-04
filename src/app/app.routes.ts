import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './layout/student-dashboard/student-dashboard.component';
import { ParentsDashboardComponent } from './layout/parents-dashboard/parents-dashboard.component';
import { TeachersComponent } from './layout/teachers/teachers.component';

export const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'admin', pathMatch: 'full' },
        { path: 'admin', component: AdminDashboardComponent },
        { path: 'student', component:StudentDashboardComponent},
        { path: 'parents', component: ParentsDashboardComponent},
        { path: 'teachers', component: TeachersComponent}
       
        
      ]
    }
];
