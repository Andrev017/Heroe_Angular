import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'home', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'detalles', component: HeroDetailComponent},
];

NgModule({
    imports: [
        CommonModule, 
        RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule],
});

export class AppRoutingModule {}
