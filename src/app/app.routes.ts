import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './layout/student-dashboard/student-dashboard.component';
import { ParentsDashboardComponent } from './layout/parents-dashboard/parents-dashboard.component';
import { TeachersComponent } from './layout/teachers/teachers.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AdmissionFormComponent } from './students/admission-form/admission-form.component';
import { StudentPromotionComponent } from './students/student-promotion/student-promotion.component';
import { AllTeachersComponent } from './teachers/all-teachers/all-teachers.component';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { PaymentComponent } from './teachers/payment/payment.component';
import { AllParentsComponent } from './parents/all-parents/all-parents.component';
import { ParentDetailsComponent } from './parents/parent-details/parent-details.component';
import { AddParentComponent } from './parents/add-parent/add-parent.component';
import { AllBooksComponent } from './library/all-books/all-books.component';
import { AddNewBookComponent } from './library/add-new-book/add-new-book.component';
import { AllFeesCollectionComponent } from './acconunt/all-fees-collection/all-fees-collection.component';
import { ExpensesComponent } from './acconunt/expenses/expenses.component';
import { AddExpensesComponent } from './acconunt/add-expenses/add-expenses.component';

export const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'admin', pathMatch: 'full' },
        { path: 'admin', component: AdminDashboardComponent },
        { path: 'student', component:StudentDashboardComponent},
        { path: 'parents', component: ParentsDashboardComponent},
        { path: 'teachers', component: TeachersComponent},
        { path: 'allstudents', component: AllStudentsComponent},
        { path: 'studentdetails', component: StudentDetailsComponent},
        { path: 'admission', component: AdmissionFormComponent},
        { path: 'studentpromotion', component: StudentPromotionComponent},
        { path: 'allteachers', component: AllTeachersComponent},
        { path: 'teacherdetails', component: TeacherDetailsComponent},
        { path: 'addteacher', component: AddTeacherComponent},
        { path: 'payment', component: PaymentComponent},
        { path: 'allparent', component: AllParentsComponent},
        { path: 'parentdetails', component: ParentDetailsComponent},
        { path: 'addparent', component: AddParentComponent},
        { path: 'allbooks', component: AllBooksComponent},
        { path: 'addnewbook', component: AddNewBookComponent},
        { path: 'allfeescollection', component: AllFeesCollectionComponent},
        { path: 'expenses', component: ExpensesComponent},
        { path: 'addexpenses', component: AddExpensesComponent},












       
        
      ]
    }
];
