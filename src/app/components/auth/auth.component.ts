import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {validateWhitespace} from '../../utilities/validators';
import {AuthDto} from '../../models/auth';
import {LoginUser, RegisterUser} from '../../store/actions/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  autForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.autForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace]),
    });
  }

  login() {
    const val = this.autForm.getRawValue() as AuthDto;
    this.store.dispatch(new LoginUser(val));
  }

  register() {
    const val = this.autForm.getRawValue() as AuthDto;
    this.store.dispatch(new RegisterUser(val));
  }

}
