import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/components/basic/basic.component';
import { ActionsComponent } from './compoentsactions/components/actions/actions.component';
import { EffectComponent } from './effects/components/effect/effect.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'learn', component: EffectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
