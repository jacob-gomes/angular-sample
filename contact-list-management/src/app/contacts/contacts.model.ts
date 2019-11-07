export class IContactModel {
    constructor(
        public contactId: string,
        public name: string,
        public emailId: string,
        public phoneNumber: string,
        public address: string,
        public userId: string
    ) {}
}