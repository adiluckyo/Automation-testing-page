import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'page1',
  loadChildren: () => import('./page1/page1.module').then(mod => mod.Page1Module)
},
{
  path: 'page2',
  loadChildren: () => import('./page2/page2.module').then(mod => mod.Page2Module)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
