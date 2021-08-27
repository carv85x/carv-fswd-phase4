import { Component, OnInit } from '@angular/core';
import { Test } from '../Test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {

  tests: Test[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTests().subscribe(tests => this.tests = tests);
  }

}
