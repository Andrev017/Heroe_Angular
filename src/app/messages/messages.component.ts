import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
