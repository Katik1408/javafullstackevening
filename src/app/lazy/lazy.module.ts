import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstlazyComponent } from './firstlazy/firstlazy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FirstlazyComponent,
    pathMatch : 'full'
  },
];

@NgModule({
  declarations: [FirstlazyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  bootstrap: [FirstlazyComponent],
})
export class LazyModule {}
