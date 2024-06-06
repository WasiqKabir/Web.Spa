import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MessageService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [],
  providers:[MessageService]
})
export class PagesModule { }
