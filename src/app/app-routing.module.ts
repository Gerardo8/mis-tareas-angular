import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
