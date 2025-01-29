import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; // ✅ Ajout de RouterModule

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule] // ✅ Ajout de RouterModule ici
})
export class HomePage {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router) {
    this.tasks$ = this.taskService.getTasks();
  }

  editTask(id: number) {
    this.router.navigate(['/edit-task', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
