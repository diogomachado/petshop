import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PetListComponent } from './pages/pet-list/pet-list.component';
import { PetAddComponent } from './pages/pet-add/pet-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PetListComponent,
    PetAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
