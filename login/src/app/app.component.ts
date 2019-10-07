import { Component } from '@angular/core';
import { User } from "./user.model";
import { UserFormGroup } from "./form.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
}
