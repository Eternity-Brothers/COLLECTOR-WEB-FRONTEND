import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
  { path: 'agents', loadChildren: () => import('./components/agents/agents.module').then(m => m.AgentsModule) },
  { path: 'admins', loadChildren: () => import('./components/admins/admins.module').then(m => m.AdminsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
