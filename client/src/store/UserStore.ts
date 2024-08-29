

export default class UserStore{

    constructor() {

        // @ts-ignore
        this._auth = false;
        // @ts-ignore
        this.user = {}
    }
    setIsAuth(bool:boolean){
        // @ts-ignore
        this._isAuth = bool;
    }

    setUser(user:any){
        // @ts-ignore
        this._user=user;
    }

    get IsAuth(){
        // @ts-ignore
        return this._isAuth;
    }

    get user(){
        // @ts-ignore
        return this._user;
    }

}