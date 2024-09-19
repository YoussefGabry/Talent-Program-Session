import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
  { path:'empty', component:EmptyRouteComponent },
  { path:'home', component:HomeComponent },
  { path:'to-do-list', component:ToDoListComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide:APP_BASE_HREF,useValue:'/'}]
})
export class AppRoutingModule { }
