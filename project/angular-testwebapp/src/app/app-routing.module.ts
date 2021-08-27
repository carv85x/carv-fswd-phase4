import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './test/test.component';
import { SolutionComponent } from './solution/solution.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NewTestComponent } from './new-test/new-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'solutions', component: SolutionsComponent},
  { path: 'test/:id', component: TestComponent },
  { path: 'solution/:id', component: SolutionComponent },
  { path: 'newtest', component: NewTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
