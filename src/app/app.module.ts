import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { requestOptionsProvider } from "./shared/services/default-request-options.service";
import { AuthenticationService } from "./shared/services/authentication.service";
import { AuthGuard } from "./shared/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClarityModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
