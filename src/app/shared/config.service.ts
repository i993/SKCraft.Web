import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor() { }

    get authApiURI() {
        return 'https://localhost:44313/api/';
    }

    get resourceApiURI() {
        return 'https://localhost:44313/api/';
    }
}