import { Component, OnInit } from '@angular/core';
import { user } from 'app/user';
import { UserService } from 'app/user.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit{
   users:user[]=[];
   constructor(private userService:UserService){
   }
    ngOnInit(){
       this.userService.getUsers().subscribe(
        (res:any)=>{
            this.users=res
        }
       )
    }
    deleteUser(email:string):void{
        this.userService.deleteUser(email).subscribe(
            ()=>{
                this.userService.getUsers().subscribe(
                    (res:any)=>{
                        this.users=res
                    }
                   )
            }
        )
    }
}
