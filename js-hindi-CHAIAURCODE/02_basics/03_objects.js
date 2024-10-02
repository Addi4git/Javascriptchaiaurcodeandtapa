// LECTURE 15  - Objects nad Events sikh loo aagar javascript sekhenen hoo toh 


// singleton - is being happened in the case of Constructor
// Object.create - this is how the constructor is created 

// object literals

const mySym = Symbol("key1")

// object contains keys and values
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   1st way of accesssing an object
// console.log(JsUser["email"])    2nd way of accesssing an object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"   // we can update the values from an object
// Object.freeze(JsUser)              // when we use freeze keyword that value can't be updated
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this is being used to access the properties of an object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());