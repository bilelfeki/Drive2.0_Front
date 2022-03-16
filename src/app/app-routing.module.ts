import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFolderComponent } from './add-folder/add-folder.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'addfolder', component: AddFolderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
