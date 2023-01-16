let config = {
    "users": [{
        "name": "Victor",
        "email": "v@or.com"
    }, {
        "name": "Ori",
        "email": "or@.org"
    }]
}
localStorage.setItem('my_users', JSON.stringify(config));
class Render {
    // "users";
    constructor(){
        let friends = localStorage.getItem('my_users')
        console.log(friends);
        let people = JSON.parse(friends)
        console.log(people);
        this.classUsers = people.users
    }
}
new Render();
