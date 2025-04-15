import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../admin/pages/component/header/header.component";
import { SideBarComponent } from "./pages/component/side-bar/side-bar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, HeaderComponent, SideBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
