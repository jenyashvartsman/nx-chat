import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chat'
      },
      {
        path: 'chat',
        loadChildren: () => import('@nx-chat/client/chat-view').then(m => m.ClientChatViewModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('@nx-chat/client/sign-in-view').then(m => m.ClientSignInViewModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
