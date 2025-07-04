import { Message } from "./Message";

export class User{
    id?: number;
    name?: string;
    lastName?: string;
    password?: string;
    email?: string;
    msg: Message = new Message();
    
}