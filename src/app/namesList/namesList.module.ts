import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { namesListComponent } from './namesList.component';

@NgModule({
  declarations: [namesListComponent],
  imports: [CommonModule, HttpClientModule],
})
export class namesListModule {}
