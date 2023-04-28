import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from 'app/pages/signin/signin.component';
import { SignupComponent } from 'app/pages/signup/signup.component';
import { UsersComponent } from 'app/pages/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    UsersComponent,
  ]
})

export class AdminLayoutModule {}
