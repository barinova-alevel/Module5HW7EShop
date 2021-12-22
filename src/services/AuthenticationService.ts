import "reflect-metadata";
import { injectable } from "inversify";
import type { LoginResponse } from "../dtos/LoginResponse";

export interface AuthenticationService {
    login(email: string, password: string): Promise<LoginResponse>;
}

@injectable()
export default class LocalStorageAuthenticationService implements AuthenticationService {
    public login(email: string, password: string): Promise<LoginResponse> {
        const token = email + password;
        localStorage.setItem("login", token);
        return Promise.resolve<LoginResponse>({ token });
    }
}