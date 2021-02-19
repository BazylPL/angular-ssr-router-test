import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';


const routes: Routes = [
  {
    path: '', redirectTo: `cmp1`, pathMatch: 'full',
  },
  {
    path: 'cmp1',
    component: Component1Component
  },
  {
    path: 'cmp2',
    component: Component2Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
