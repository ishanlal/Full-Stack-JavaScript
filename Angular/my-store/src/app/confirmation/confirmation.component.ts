import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  username: string;
  total: number;

  constructor(private route: ActivatedRoute) {
    this.username = '';
    this.total = 0;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.username = params['name'];
    this.total = params['tot'];
  });
  }

}
