import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Test } from '../Test';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  tests: Test[] = [];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTests().subscribe(tests => this.tests = tests);
  }



}
