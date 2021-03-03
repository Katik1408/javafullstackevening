import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PricingComponent } from './pricing/pricing.component';
import { SiblingComponent } from './sibling/sibling.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { StudentComponent } from './student/student.component';

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
    path: 'price',
    component: PricingComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'student/createstudent',
    component: CreatestudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
