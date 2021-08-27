import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TestService } from '../test.service';
import { Test } from '../Test';
import { Question } from '../Question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: Test | undefined;

  answers: {qId: number, aId: string}[] = [];

  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTest();
    this.initAnswers();
  }

  getTest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.testService.getTest(id).subscribe(test => this.test = test);
  }

  isIncomplete(): boolean {
     return this.answers.find(a => a.aId === '') === undefined;
  }

  onSubmit(): void{
    this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  initAnswers(): void {
    this.test?.questions.forEach(question => this.answers.push({qId: question.id, aId: ''}));
  }

  onSelect(qId: number, aId: string): void {
    this.answers.find(a => a.qId === qId)!.aId = aId;    
  }

  isSelected(qId: number, aId: string): boolean {
    return this.answers.find(a => a.qId === qId)!.aId === aId;
  }

}
