import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatSnackBar,  MatSnackBarRef, SimpleSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AuthService:AuthService,
    private _snackBar: MatSnackBar,
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  login(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value      
      this.AuthService.login(value.email, value.password)
          .then( resp => {
            this.msgSnack('Bienvenido')
            this.router.navigate(['/admin'])
          })
          .catch( err => {
            //console.log(err)
            this.msgSnack('Usuario y contraseña Incorrectos')
          })
    }
    //console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });


  }

  msgSnack(mensaje:string){
    const config = new MatSnackBarConfig();
    // config.panelClass = ['background-red'];
    // config.direction 
    // config.verticalPosition = 'bottom';
    // config.horizontalPosition = 'center';
    config.duration = 2000
    this.zone.run(() => {
    this._snackBar.open(mensaje, 'X', config);
  });
  }



}
