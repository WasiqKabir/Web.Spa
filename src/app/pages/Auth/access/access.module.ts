import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { AccessRoutes } from './access.routing';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AccessRoutes,
    ButtonModule
  ],
  declarations: [AccessComponent]
})
export class AccessModule { }
