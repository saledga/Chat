import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { enviroment } from '../enviroments/enviroment';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatComponent,
    FormsModule,  
  ],
  providers: [
    ChatService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
}
