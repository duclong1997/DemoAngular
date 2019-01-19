import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHeroComponent} from './list-hero/list-hero.component'
import { ShowComponent} from './show/show.component'
import { InforHeroComponent } from './infor-hero/infor-hero.component';

const routes: Routes = [
  {
  //  path : url , component : file html 
  path:'show', component :ShowComponent
}

,{
  path: 'showlist', component: ListHeroComponent
},
// component show the first
{path:'', redirectTo:'/showlist', pathMatch:'full'},

// link with parameter 
{path:'detail/:id', component:InforHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
