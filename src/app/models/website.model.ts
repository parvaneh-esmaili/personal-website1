export class Website {
    Name: string;
    Email: string;
    Message: string;

    constructor(
        Name: string = '',
        Email: string = '',
        Message: string = ''
    ){
        this.Name = Name;
        this.Email = Email;
        this.Message = Message;
    }
}

export class WebsiteForLoad{
    id: number;
    Name: string;
    Email: string;
    Message: string;

    constructor(
        id: number= 0 ,
        Name : string ='',
        Email: string= '',
        Message: string= ''
        ){
            this.id = id;
            this.Name = Name;
            this.Email = Email;
            this.Message = Message;
        }
   
}


