import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() username: string;
  @Input() total: number;

  constructor() {
    this.username = '';
    this.total = 0;
  }

  ngOnInit(): void {
  }

}
