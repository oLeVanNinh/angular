import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { Message } from "../messages/message.model";
import { FormComponent } from "./form/form.component";
import { MessageService } from '../messages/message.service';

@Injectable()

export class UnsavedGuard {
  constructor(private message: MessageService, private router: Router) { }

  canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (component.editing) {
      if (["name", "category", "price"].some(prop => component.product[prop] != component.originalProduct[prop])) {
        let subject = new Subject<boolean>();

        let response: [string, (string) => void][] = [
          ["Yes", () => {
            subject.next(true);
            subject.complete();
          }],
          ["No", () => {
            subject.next(false);
            subject.complete();
          }]
        ]

        this.message.reportMessage(new Message("Discard Changes?", true, response));
        return subject;
      }
    }

    return true;
  }
}
