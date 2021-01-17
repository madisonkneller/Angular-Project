import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { namesListModule } from './namesList/namesList.module';
import { FilterPipe } from './pipes/filter.pipe';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    LoginModule,
    namesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
