import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInViewComponent } from './sign-in-view/sign-in-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SignInViewComponent}])
  ],
  declarations: [
    SignInViewComponent
  ],
  exports: [
    SignInViewComponent
  ]
})
export class ClientSignInViewModule {
}
