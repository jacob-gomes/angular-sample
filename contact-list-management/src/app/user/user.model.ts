export class IUserModel {
    constructor(
        public userId: string,
        public name: string,
        public emailId: string,
        public phoneNumber: string,
        public address: string,
        public isAdmin: boolean
    ) {}
}