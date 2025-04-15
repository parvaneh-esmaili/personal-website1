import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/website/website.module').then ((m) => m.WebsiteModule)
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.module').then ((m) => m.AdminModule)
    }
  
  //userProfile
  //login
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
