const { error } = require("jquery");

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const success = true;
        if(success) {
            resolve("Operation success!")
        } else {
            reject("operation faild!")
        }
    }, 2000)
});

myPromise
.then((result) => {
    console.log(result) //Success
})
.catch((error) => {
    console.log(error); //error
});

async function fetchAsynData () {
    try {
        const result = await myPromise
        console.log(result) //Success
    } catch(error){
        console.log(error);
    }
         
}

fetchAsynData();

// classes

class User {
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.loggedIn = false;
    }
    login() {
        this.loggedIn = true;
        console.log(`${this.firstName} has logged in`)
    }
    logout(){
        this.loggedIn = false;
        console.log(`${this.firstName} has logged out`)
    }
}

let userOne = newUser = new User('John', 'Doe','john@email.com')
let useTwo = newUser = new User('Mery', 'Jane','mery@email.com')

userOne.login();
userOne.logout();

// geter & setter
class Person {
    constructor ( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName (_value) {
        const parts = _value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts [1]
        console.warn('changed the name')
    }
}

const p1 = new Person('Alina', 'Doe')
console.log(p1.fullName);
p1.fullName = "ali Gibson"
console.log(p1.fullName);


//Static 

class UserService {
    constructor(uri) {
        this.baseUri = uri
    }
    static singUp(user) {
        console.log("Registering user")
        console.log(user)
    }
    static singIn(email, password){
        console.log(`loggin in user with ${email} and ${password}` );
    }
}

UserService.singUp({firstName: 'John', lastName: 'Gibson'})
UserService.singIn('john@gmail.com', '123456789');
