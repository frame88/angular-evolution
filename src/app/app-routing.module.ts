import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCTailwindComponent } from './first-c-tailwind/first-c-tailwind.component';

const routes: Routes = [
  { path: 'first', component: FirstCTailwindComponent },
  { path: '**', component: FirstCTailwindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
