import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Test } from '../Test';
import { Question } from '../Question';
import { Answer } from '../answer';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  tests: Test[] | undefined;

  correctAnswers = ['a', 'b', 'c'];

  answers: Answer[] = [
    {id:'a', answer:''},
    {id:'b', answer:''},
    {id:'c', answer:''},
    {id:'a', answer:''},
    {id:'b', answer:''},
    {id:'c', answer:''},
    {id:'a', answer:''},
    {id:'b', answer:''},
    {id:'c', answer:''},
  ]

  questions: Question[] = [
    {id:1, question: '', answers:[this.answers[0], this.answers[1], this.answers[2]], correctAnswer:''},
    {id:2, question: '', answers:[this.answers[3], this.answers[4], this.answers[5]], correctAnswer:''},
    {id:3, question: '', answers:[this.answers[6], this.answers[7], this.answers[8]], correctAnswer:''},
  ]

  testName: string = '';

  submitted: boolean = false;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getTests();
    // this.createTest();
  }

  getTests(): void {
    this.testService.getTests().subscribe(tests => this.tests = tests);
  }

  onSubmit(): void {
    this.submitted = true;
    this.createTest();
  }

  createTest(): void {
    this.tests?.push({id: this.tests.length + 1, name: this.testName, questions: this.questions});
  }

  getIndex(aId: string): number {
    if(aId === 'a') return 0;
    if(aId === 'b') return 1;
    if(aId === 'c') return 2;
    else return -1;
  }

  // createTest(): void {
  //   this.testId = this.tests?.length;

  //   // Create Test
  //   this.test = {id: this.testId!, name:'', questions:[]};

  //   // Add Question 1
  //   this.test.questions.push({ id: 1, question: '', answers: [], correctAnswer: ''});
  //   // Add Answer 1
  //   this.test.questions[0].answers.push({id:'a', answer:''});
  //   // Add Answer 2
  //   this.test.questions[0].answers.push({id:'b', answer:''});
  //   // Add Answer 3
  //   this.test.questions[0].answers.push({id:'c', answer:''});

  //   // Add Question 2
  //   this.test.questions.push({ id: 2, question: '', answers: [], correctAnswer: ''});
  //   // Add Answer 1
  //   this.test.questions[1].answers.push({id:'a', answer:''});
  //   // Add Answer 2
  //   this.test.questions[1].answers.push({id:'b', answer:''});
  //   // Add Answer 3
  //   this.test.questions[1].answers.push({id:'c', answer:''});

  //   // Add Question 3
  //   this.test.questions.push({ id: 3, question: '', answers: [], correctAnswer: ''});
  //   // Add Answer 1
  //   this.test.questions[2].answers.push({id:'a', answer:''});
  //   // Add Answer 2
  //   this.test.questions[2].answers.push({id:'b', answer:''});
  //   // Add Answer 3
  //   this.test.questions[2].answers.push({id:'c', answer:''});
  // }



  // tests: Test[] | undefined;
  // newTest: Test = {id: 0, name: '', questions: []};

  // submitted: boolean = false;

  // questionCount: number = 0;

  // answerCount: number = 0;

  // constructor(private testService: TestService) { }

  // ngOnInit(): void {
  //   this.getTests();
  // }

  // getTests(): void {
  //   this.testService.getTests().subscribe(tests => this.tests = tests);
  // }

  // onSubmit(): void {
  //   this.submitted = true;
  // }

  // createTest(newTest: Test): void {
  //   this.tests?.push(newTest);
  // }

  // addQuestion(): void {
  //   this.answerCount = 0;
  //   this.questionCount+=1;
  //   this.newTest.questions.push({id: this.questionCount, question: '', answers: [], correctAnswer:''});
  // }

  // addAnswer(qId: number): void {
  //   this.answerCount+=1;
  //   let aId: string = '';
  //   switch(this.answerCount) {
  //     case 1:
  //       aId = 'a';
  //       break;
  //     case 2:
  //       aId = 'b';
  //       break;
  //     case 3:
  //       aId = 'c';
  //       break;
  //     case 4:
  //       aId = 'd';
  //       break;
  //     case 5:
  //       aId = 'e';
  //       break;
  //   }

  //   this.newTest.questions[qId].answers.push({id: aId, answer: ''});
  // }

  // getAnswer(qId: number, aId: string): Answer {
  //   return this.newTest.questions[qId].answers.find(a => a.id === aId)!;
  // }
}
