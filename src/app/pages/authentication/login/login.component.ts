import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit{

  verifForm=false;
  message:string='';
  email:string="";
  password:string="";
  // loginForm= new FormGroup({
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  // });

  loginForm= this.formbuilder.group({
    email:[''],
    password:[''],
  });
  constructor(
    private  loginService: LoginService,
    private formbuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {

  }
  // login(){
  //   const {email, password} = this.loginForm.value;
  //   this.loginService.getLogin(email,password).subscribe({
  //     next:(res)=>{
  //       this.loginService.setAuthToken(""); //save token
  //       // this.loginService.setAuthToken(res.access_token); //save token
  //       // this.back()
  //     },
  //     error:(err)=>{
  //       this.errorMessage = err.error?.message || 'Login failed.';
  //     }
  //   });
  // }

  login(){
    this.verifForm=true;
    this.loginService.getLogin(this.loginForm.value).subscribe(
      response=>{
        if(response.status==200){
          localStorage.setItem('token',response.token);
          this.router.navigate(['/burger']);
          // console.log(response)
        }else {
          this.message="Email ou mot de passe incorrect";
        }
      });
  }
  logout(){
   localStorage.removeItem('token');
   this.router.navigate(['/login']);
  }
}
