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

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least
                ${state.errors['minlength'].requiredLength}
                characters`);
              break;
          case "pattern":
            messages.push(`The ${thing} contains
                  illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}
