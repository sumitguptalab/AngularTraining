
export class Friend {
    private _name: string;
    private _age: number;
    private _email: string;
    private _bestFriend: boolean;
    
    constructor(name: string, age: number, email?: string, bestFriend?: boolean) {
        this._name = name;
        this._age = age;
        this._email = (typeof email == 'string') ? email : "";
        this._bestFriend = (typeof bestFriend == 'boolean') ? bestFriend : false;
    }

    get name():string {
        return this.name;
    }

    set name(name: string){
        this._name = name;
    }

    get age():number {
        return this._age;
    }

    set age(age: number){
        this._age = age;
    }

    get email():string {
        if(typeof this._email == 'string') {
            return this._email;
        } else {
            return "";
        }
    }

    set email(email: string){
        this._email = (typeof email == 'string') ? email : "";;
    }

    get bestFriend():boolean {
        if(typeof this.bestFriend == 'boolean') {
            return this._bestFriend;
        } else {
            return false;
        }
    }

    set bestFriend(bestFriend: boolean){
        this._bestFriend = (typeof bestFriend == 'boolean') ? bestFriend : false;;
    }
}