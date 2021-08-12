import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ChatViewComponent}])
  ],
  declarations: [
    ChatViewComponent
  ],
  exports: [
    ChatViewComponent
  ]
})
export class ClientChatViewModule {
}
