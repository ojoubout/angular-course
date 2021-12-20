import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})

export class RecipeDetailGuard implements CanActivateChild {
  constructor(public route: Router, public recipeService: RecipeService) {
  }

  isNumber(n) {
    return n == +n;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(childRoute.params.id);

    if (childRoute.params.id && (!this.isNumber(childRoute.params.id) || childRoute.params.id >= this.recipeService.recipes.length)) {
      return this.route.parseUrl('/recipe');
    }
    return true;
  }

}

