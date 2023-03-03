import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

const routes: Routes = [
  { path: '',   redirectTo: '/save', pathMatch: 'full' },
  { path: 'save', component: Page1Component },
  { path: 'care', component: Page2Component },
  { path: 'worry', component: Page3Component },
  { path: 'offer', component: Page4Component },
  { path: 'invite', component: Page5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
