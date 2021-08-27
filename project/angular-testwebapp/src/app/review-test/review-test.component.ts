import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../Test';
import { Answer } from '../answer';

@Component({
  selector: 'app-review-test',
  templateUrl: './review-test.component.html',
  styleUrls: ['./review-test.component.css']
})
export class ReviewTestComponent implements OnInit {

  @Input() test: any;
  @Input() answers: any;

  constructor() { }

  ngOnInit(): void {
  }

  validate(qId: number, aId: string): string {    
    const answers: {qId: number, aId: string}[] = this.answers;
    const test: Test = this.test;
    const answer: {qId: number, aId: string} = answers.find(a => a.qId === qId && a.aId === aId)!;
    
    // Check that current answer in template exist in answer array
    if(answer) {
      
      // Check whether answer is correct
      if(test.questions.find(q => q.id === qId && q.correctAnswer === aId))
        return "correct";
      else
        return "incorrect";
    } else
      return "";
  }

}
