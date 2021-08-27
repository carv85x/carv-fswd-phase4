import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../Test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  test: Test | undefined;

  answers: {qId: number, aId: string}[] = [];  

  constructor(private testService: TestService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTest();
    this.initAnswers();
  }

  getTest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.testService.getTest(id).subscribe(test => this.test = test);
  }

  initAnswers(): void {
    this.test?.questions.forEach(question => this.answers.push({qId: question.id, aId: question.correctAnswer}));
  }

}
