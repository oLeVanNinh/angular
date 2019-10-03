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
  form: UserFormGroup = new UserFormGroup();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    debugger;
  }
}
