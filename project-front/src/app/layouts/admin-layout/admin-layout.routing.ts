import { Routes } from '@angular/router';
import { SigninComponent } from 'app/pages/signin/signin.component';
import { SignupComponent } from 'app/pages/signup/signup.component';
import { UsersComponent } from 'app/pages/users/users.component';



export const AdminLayoutRoutes: Routes = [
    
    { path: 'signin',           component: SigninComponent },
    { path: 'signup',          component: SignupComponent },
    { path: 'users',          component:  UsersComponent},
    
  
];
