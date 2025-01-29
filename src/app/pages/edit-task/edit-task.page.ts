import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule], // ✅ Ajout des modules nécessaires
})
export class EditTaskPage implements OnInit {
  taskId: number = 0;
  taskForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private toastController: ToastController,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(this.taskId)) {
      this.loadTask();
    }
  }

  loadTask() {
    const task: Task | undefined = this.taskService.getTaskById(this.taskId);
    console.log('Tâche chargée:', task); 
    if (task) {
      this.taskForm.patchValue(task);
    } else {
      this.showToast('Tâche introuvable !');
      this.router.navigate(['/tasks']);
    }
  }

  async updateTask() {
    if (this.taskForm.valid) {
      const updatedTask = { 
        ...this.taskForm.value, 
        id: this.taskId // Ajoute l'ID de la tâche pour ne pas perdre l'identifiant
      };
      this.taskService.updateTask(updatedTask);
  
      const toast = await this.toastController.create({
        message: 'Tâche mise à jour avec succès!',
        duration: 2000,
        position: 'top',
      });
      toast.present();
  
      setTimeout(() => {
        this.router.navigate(['/']); // Retour à l'accueil après 2s
      }, 2000);
    } else {
      const toast = await this.toastController.create({
        message: 'Veuillez remplir tous les champs.',
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
