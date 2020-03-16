import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private readonly http: HttpClient) {

    }

    signup(email: string, password: string) {
        console.log('отправля');
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsLHvUIDgaWUBSfdRIPfQMY3STq0Bk6yc',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }
}
