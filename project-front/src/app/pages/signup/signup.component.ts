import { Component, OnInit } from '@angular/core';
import { user } from 'app/user';
import { UserService } from 'app/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'signup.component.html'
})

export class    SignupComponent implements OnInit{
    user : user ={email:"",
    firstName:"",
    lastName:"",
    password:""}
    invalidEmail = false;
    success:boolean=false;
    taken:boolean=false;
    validateEmail() {
      this.invalidEmail = !this.isValidEmail(this.user.email);
    }
    constructor(private userService:UserService ){}
    ngOnInit(){
    }
    signup(){
        this.validateEmail()
        if(!this.invalidEmail){
        this.userService.signUp(this.user).subscribe(
            (res:number)=>{
               if(res==0){
                this.success = true;
                setTimeout(() => {
                    this.success = false;
                }, 2000);
               }
               else {
                this.taken = true;
                setTimeout(() => {
                    this.taken = false;
                }, 2000);
               }
            }
        )}
    }
    isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email);
      }
}
