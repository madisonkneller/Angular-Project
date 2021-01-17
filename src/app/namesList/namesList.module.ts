import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { namesListComponent } from './namesList.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [namesListComponent, FilterPipe],
  imports: [CommonModule, HttpClientModule],
})
export class namesListModule {}
