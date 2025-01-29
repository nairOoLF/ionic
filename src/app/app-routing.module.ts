import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { EditTaskPage } from './pages/edit-task/edit-task.page';
import { AddTaskPage } from './pages/add-task/add-task.page';

const routes: Routes = [
  { path: '', component: HomePage }, // Route de la home page
  { path: 'edit-task/:id', component: EditTaskPage }, // Route pour modifier une tâche
  { path: 'add-task', component: AddTaskPage }, // Route pour ajouter une tâche
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
