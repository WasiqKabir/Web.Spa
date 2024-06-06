import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorRoutes } from './error.routing';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule, 
    ErrorRoutes,
    ButtonModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
