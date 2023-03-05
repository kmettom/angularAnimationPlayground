import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';

import { Common1Component } from './common1/common1.component';
import { Common2Component } from './common2/common2.component';
import { Common3Component } from './common3/common3.component';
import {animate, state, style, transition, trigger} from "@angular/animations";

const routes: Routes = [
  { path: 'common1', component: Common1Component,
    data: { animation: 'HomePage' }
  },
  { path: 'common2', component: Common2Component,
    data: { animation: 'AboutPage' }
  },
  { path: 'common3', component: Common3Component,
    data: { animation: 'openClose' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {
}
