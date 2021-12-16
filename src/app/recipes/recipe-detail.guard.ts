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
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(childRoute.params.id + " , " + this.recipeService.recipes.length)

    if (childRoute.params.id < this.recipeService.recipes.length) {
      return true;
    }
    return this.route.parseUrl('/recipe');
  }

}

