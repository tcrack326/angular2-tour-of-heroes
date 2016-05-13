export class User {

    constructor(
        public    id: number,
        public  FirstName: string,
        public  LastName: string,
        public  Email: string
    ){}

    public static Empty : User = new User(1, '', '', '');
}