import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { AuthenticationService } from "src/services/authentication.service"

export const myActivator = () => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);
    if (authenticationService.isAuthenticated()) {
        return true;
    } else {
        router.navigateByUrl("/login");
        return false;
    }
} 