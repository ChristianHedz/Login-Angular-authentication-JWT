import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  public isLoginActive = false;

  constructor(private formBuilder:FormBuilder, private router:Router){}

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    password: [``,[Validators.required,Validators.minLength(3)]]
  });

  registerForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    number: ['',[Validators.required,Validators.minLength(10)]],
    password: [``,[Validators.required,Validators.minLength(3)]]
  });

  onLoginActive(){
    this.isLoginActive = !this.isLoginActive;
  }

  //login

  get usernameLogin(){
    return this.loginForm.controls.username;
  }

  get emailLogin(){
    return this.loginForm.controls.email;
  }

  get passwordLogin(){
    return this.loginForm.controls.password;
  }

  //register

  get username(){
    return this.registerForm.controls.username;
  }

  get email(){
    return this.registerForm.controls.email;
  }

  get password(){
    return this.registerForm.controls.password;
  }

  get number(){
    return this.registerForm.controls.number;
  }

  public async login(){

    if (this.loginForm.valid || this.registerForm.valid) {
      await Swal.fire({
        icon: 'success',
        title: 'Login',
        text: 'Login success',
      });
      this.router.navigateByUrl('/dashboard');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Ingresa los datos correctamente',
        icon: 'error',
      });
    }
  }

}