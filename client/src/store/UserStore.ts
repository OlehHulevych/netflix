import { makeAutoObservable } from "mobx";

export default class UserStore {
    private _isAuth: boolean;
    private _user: any; // Using 'any' since you don't need a strict type

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: any) {
        this._user = user;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): any {
        return this._user;
    }
}