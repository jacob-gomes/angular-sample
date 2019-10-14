import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()

export class BeerRouterGaurds implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = route.params.id;
        if (isNaN(id) || id < 1) {
            alert(' Invalid Id');
            this.router.navigate(['/beers']);
            return false;
        }

        return true;
    }
}
