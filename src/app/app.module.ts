import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {ApiService} from './services/api.service';
import {AppStoreModule} from './store/app-store.module';
import { AuthComponent } from './components/auth/auth.component';
import {UiModule} from './ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {UserModule} from './features/user/user.module';
import {IdeaModule} from './features/idea/idea.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppStoreModule,
    UiModule,
    UserModule,
    IdeaModule
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
