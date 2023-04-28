import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit{
    email:string="";
    password:string="";
    success:boolean=false;
    exist:boolean=false;
    bad:boolean=false;
    constructor(private userService:UserService ){}
    ngOnInit(){
    }
    signin(){
        this.userService.signIn(this.email,this.password).subscribe(
            (res:number)=>{
                if(res==0){
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                    }, 2000);
                   }
                   else if(res==2) {
                    this.exist = true;
                    setTimeout(() => {
                        this.exist = false;
                    }, 2000);
                   }
                   else  {
                    this.bad = true;
                    setTimeout(() => {
                        this.bad = false;
                    }, 2000);
                   }
            }
        )
    }
}
