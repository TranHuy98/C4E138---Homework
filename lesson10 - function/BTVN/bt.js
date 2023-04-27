let users = [{
    "id": 1,
    "first_name": "Lorilee",
    "last_name": "Adame",
    "email": "ladame0@guardian.co.uk",
    "password": "12345678"
}, {
    "id": 2,
    "first_name": "Gannon",
    "last_name": "Manwell",
    "email": "gmanwell1@naver.com",
    "password": "12345678"
}, {
    "id": 3,
    "first_name": "Christiana",
    "last_name": "Dowtry",
    "email": "cdowtry2@mapy.cz",
    "password": "12345678"
}, {
    "id": 4,
    "first_name": "Warden",
    "last_name": "Ansteys",
    "email": "wansteys3@yahoo.com",
    "password": "12345678"
}, {
    "id": 5,
    "first_name": "Claybourne",
    "last_name": "Barbosa",
    "email": "cbarbosa4@si.edu",
    "password": "12345678"
}, {
    "id": 6,
    "first_name": "Zita",
    "last_name": "Triner",
    "email": "ztriner5@youku.com",
    "password": "12345678"
}, {
    "id": 7,
    "first_name": "Orsa",
    "last_name": "Pilcher",
    "email": "opilcher6@surveymonkey.com",
    "password": "12345678"
}, {
    "id": 8,
    "first_name": "Lyn",
    "last_name": "Fockes",
    "email": "lfockes7@answers.com",
    "password": "12345678"
}, {
    "id": 9,
    "first_name": "Harv",
    "last_name": "Olifaunt",
    "email": "holifaunt8@jalbum.net",
    "password": "12345678"
}, {
    "id": 10,
    "first_name": "Nikita",
    "last_name": "Duncanson",
    "email": "nduncanson9@harvard.edu",
    "password": "123"
}];


const greet = document.getElementById("greet");

const login = document.getElementById("login");
const signup = document.getElementById("signup");

function loginShow() {
    login.style.display = "block";
    signup.style.display = "none";
}
function signupShow() {
    login.style.display = "none";
    signup.style.display = "block";
}
function checkLogin() {
    let loginEmail = document.getElementById("login-email").value;

    let loginPassword = document.getElementById("login-password").value;

    for (let user of users) {
        if (user.email == loginEmail && user.password == loginPassword) {
            greet.innerHTML = `Xin chào ${user.first_name} ${user.last_name}`;
            break;
        }
        else {
            greet.innerHTML = `Thông tin tài khoản không chính xác`;
        }
    }

}


function checkSignUp() {
    let signupFirstName = document.getElementById("signup-fisrtname").value;

    let signupLastName = document.getElementById("signup-lastname").value;

    let signupEmail = document.getElementById("signup-email").value;

    let signupPassword = document.getElementById("signup-password").value;

    let nextId = users.length;
    let checkSignUp = true;
    let nextUser = {};

    if (signupFirstName == "" || signupLastName == "" || signupEmail == "" || signupPassword == "") {
        greet.innerHTML = `Hãy nhập đủ thông tin`;
        return;
    }

    for (let user of users) {

        if (signupEmail == user.email) {

            greet.innerHTML = `Email này đã có tài khoản`;
            checkSignUp = false;
            break;
        }
    }

    if (checkSignUp) {
        nextUser.id = nextId + 1;
        nextUser.first_name = signupFirstName;
        nextUser.last_name = signupLastName;
        nextUser.email = signupEmail;
        nextUser.password = signupPassword;
        users.push(nextUser);
        greet.innerHTML = `Đăng kí thành công`;
        console.log(users[users.length - 1]);

    }

}
