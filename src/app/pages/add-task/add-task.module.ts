import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddTaskPage } from './add-task.page'; // <-- Importation du composant

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddTaskPage }]) // <-- Utilisation directe
  ],
})
export class AddTaskPageModule {}
