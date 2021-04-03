import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MenubarModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MenubarModule
  ],
  providers: [MessageService]
})
export class UiModule { }
