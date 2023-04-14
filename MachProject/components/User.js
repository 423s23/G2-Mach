export default class User {
    constructor(name, username, email, password, city, state, phone, team) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.team = team;
    }

    // get username() {
    //     return this.username
    // }
    // get email() {
    //     return this.email
    // }
    // set email(e) {
    //     this.email = e
    // }
    // get password() {
    //     return this.password
    // }
    // set password(p) {
    //     this.password = p
    // }
}