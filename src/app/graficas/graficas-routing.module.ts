import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasModule } from './graficas.module';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'barras', component: BarrasComponent},
      {path: 'barras-dobles', component: BarrasDoblesComponent},
      {path: 'dona', component: DonaComponent},
      {path: 'dona-http', component: DonaHttpComponent},
      {path: '**', redirectTo:'barras' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
