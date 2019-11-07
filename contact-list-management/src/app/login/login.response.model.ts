export class ILoginResponse {
    constructor(
        public isSuccessful: boolean,
        public isAdmin: boolean
    ) {}
}