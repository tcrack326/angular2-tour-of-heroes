export class Hero {

    constructor(
        public    id: number,
        public  name: string,
        public  power: string,
        public  alterEgo?: string
    ){}
    
    public static Empty : Hero = new Hero(1, '', '');
}