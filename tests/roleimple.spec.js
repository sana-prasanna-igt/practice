
// the below code is used to implement the concept of inheritance in javascript
//below code is used to create a class named User with constructor and method
// below code is used to create a class named Guest which inherits the properties of User class
// below code is used to create an object of User class and Guest class and call the method of both classes
class User {
    constructor(user, permission) {
        this.user = user;
        this.permission = permission;
    }

    displayInfo() {
        console.log('user :', this.user, 'permission :', this.permission);
    }
}
class Guest extends User 
{
    constructor(user, role) {
        super(user, 'Guest');
        this.role = role;
    }

    displayInfo() {
        super.displayInfo();
        console.log('no permission for guest user');
        console.log('user :', this.user, 'role :', this.role);
    }
}
// below code is used to create an object of User class and Guest class and call the method of both classes
const obj = new User('Sana', ['read', 'write', 'readwrite']);
const guoobj = new Guest('Guest', 'No Access');
// below code is used to call the method of both classes
obj.displayInfo();
guoobj.displayInfo();

