import { Injectable } from '@angular/core';
import { Test } from './Test';
import { TESTS } from './mock-tests';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getTests(): Observable<Test[]> {
    const tests = of(TESTS);
    return tests;
  }

  getTest(id: number): Observable<Test> {
    const test = TESTS.find(t => t.id === id)!;
    return of(test);
  }

}
