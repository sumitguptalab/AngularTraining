import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'},
  {path: 'user/list',  component: UserListComponent },
  {path: 'user/create',  component: UserCreateComponent },
  {path: 'user/detail/:id',  component: UserDetailComponent },
  {path: 'user/edit/:id',  component: UserEditComponent },
  {path: 'user/delete/:id',  component: UserDeleteComponent },
  {path: '**',  component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
