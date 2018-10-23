export class Friend {
    constructor(name, age, email, bestFriend) {
        this._name = name;
        this._age = age;
        this._email = (typeof email == 'string') ? email : "";
        this._bestFriend = (typeof bestFriend == 'boolean') ? bestFriend : false;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get email() {
        if (typeof this._email == 'string') {
            return this._email;
        }
        else {
            return "";
        }
    }
    set email(email) {
        this._email = (typeof email == 'string') ? email : "";
        ;
    }
    get bestFriend() {
        if (typeof this.bestFriend == 'boolean') {
            return this._bestFriend;
        }
        else {
            return false;
        }
    }
    set bestFriend(bestFriend) {
        this._bestFriend = (typeof bestFriend == 'boolean') ? bestFriend : false;
        ;
    }
}
