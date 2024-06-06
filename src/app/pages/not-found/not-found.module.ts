import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutes } from './not-found.routing';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutes,
    RouterLink
  ],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
