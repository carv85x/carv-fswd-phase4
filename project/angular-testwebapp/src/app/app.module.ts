import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './test/test.component';
import { SolutionComponent } from './solution/solution.component';
import { NewTestComponent } from './new-test/new-test.component';
import { ReviewTestComponent } from './review-test/review-test.component';
import { SolutionsComponent } from './solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestsComponent,
    TestComponent,
    SolutionComponent,
    NewTestComponent,
    ReviewTestComponent,
    SolutionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
