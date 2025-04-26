export class User {
    id: number;
    name: string;
    email: string;
    message: string;

    constructor(
        id: number,
        name: string,
        email:string,
        message:string,
    ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
}
}