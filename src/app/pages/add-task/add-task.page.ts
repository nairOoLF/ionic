import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importer Router pour la redirection

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule] // Ajoute IonicModule ici pour les composants Ionic
})
export class AddTaskPage {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['medium', Validators.required]
    });
  }

  saveTask() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
        ...this.taskForm.value,
        completed: false
      };
      console.log('Adding task:', newTask);

      // Ajouter la tâche
      this.taskService.addTask(newTask);
      console.log('Task added:', newTask);

      // Rediriger vers la page d'accueil
      this.router.navigate(['/']);
    }
  }
}
