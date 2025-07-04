import { User } from "../models/User";

export interface ILoginService{
    Login(user: User): void;
}