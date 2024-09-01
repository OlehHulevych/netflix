import { makeAutoObservable } from "mobx";

export default class UserStore {
    private isAuth: boolean;
    private user: any; // Using 'any' since you don't need a strict type


    constructor() {
        this.isAuth = false;
        this.user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this.isAuth = bool;
    }

    fsetUser(user:any) {
        this.user = user;
    }

    get getIsAuth(): boolean {
        return this.isAuth;
    }

    get getUser(): any {
        return this.user;
    }



}