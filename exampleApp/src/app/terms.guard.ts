import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";

@Injectable()

export class TermGuard {
  constructor(private messages: MessageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.params['mode'] == 'create') {
      return new Promise<boolean>((resolve) => {
        let response: [string, () => void][] = [["Yes", () => resolve(true)], ["No", () => resolve(false)]];

        this.messages.reportMessage(new Message("Do you accept the terms & conditions?", false, response))
      });
    }
    else {
      return true;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.url.length > 0 && route.url[route.url.length - 1].path == "categories") {
      return new Promise<boolean>((resolve, reject) => {
        let response: [string, (string) => void][] = [["Yes", () => resolve(true)], ["No", () => resolve(false)]]
        this.messages.reportMessage( new Message("Do you want to see the categories", false, response))
      })
    } else {
      return true;
    }
  }
}
