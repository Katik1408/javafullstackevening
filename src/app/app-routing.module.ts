import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PricingComponent } from './pricing/pricing.component';
import { SiblingComponent } from './sibling/sibling.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { StudentComponent } from './student/student.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { Login2Component } from './login2/login2.component';
const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'sibling',
    component: SiblingComponent,
  },
  {
    path: 'login',
    component: Login2Component,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'student/createstudent',
    component: CreatestudentComponent,
  },
  {
    path: 'student/updatestudent',

    component: EditstudentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
