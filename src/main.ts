import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { Routes,RouterOutlet,provideRouter } from '@angular/router';


const router:Routes = [
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'',
    redirectTo:'table',
    pathMatch:'full'
  }
]
@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  imports:[RouterOutlet],
  standalone: true, 
 
})

export class App {
  
  name = 'Angular';
}

bootstrapApplication(App,{
  providers: [provideRouter(router)]
});
