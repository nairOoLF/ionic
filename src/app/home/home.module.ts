import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Assure-toi que RouterModule est bien importé

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', loadComponent: () => import('./home.page').then(m => m.HomePage) }]),  // Lazy loading de HomePage
  ],
})
export class HomePageModule {}
