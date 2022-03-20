import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './core/services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean ;
  title = 'toDoList';

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit(): void {}

}
