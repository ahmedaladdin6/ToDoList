import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { landingListComponent } from './landing-list.component';
import { AddListComponent } from './pages/add-list/add-list.component';
import { AllListComponent } from './pages/all-list/all-list.component';


const routes: Routes = [
  {
    path:'',component:landingListComponent,
  
    children:[
      {
        path:'',component:AllListComponent
      },
      {
        path:'add-edit/:id',component:AddListComponent,
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
