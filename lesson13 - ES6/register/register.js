let users = [];
if (JSON.parse(localStorage.getItem('users')) !== null) {
	users = JSON.parse(localStorage.getItem('users'));
}

document.getElementById('register').onclick = function () {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	let isExistEmail = false;

	if (!validateEmail(email)) {
		alert('Email chưa đúng định dạng');
		return;
	}
	if (password.length < 6) {
		alert('Password chưa đủ mạnh');
		return;
	}

	for (let user of users) {
		if (user.email === email) {
			isExistEmail = true;
		}
	}

	if (isExistEmail === true) {
		alert('Email đã tồn tại');
	} else {
		alert('Đăng ký thành công');
		users.push({
			email: email,
			password: password,
		});

		localStorage.setItem('users', JSON.stringify(users));
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';
	}
};

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};


document.getElementById("login").onclick = function(){
    const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
    let isLoginSuccess = false; 

    for (let user of users) {
		if (user.email === email && user.password === password) {
			isLoginSuccess = true;
		}
	}

    if(isLoginSuccess){
        alert(`Dang nhap thanh cong. Xin chao ${email} !`);
    }
    else{
        alert(`Thong tin tai khoan chua chinh xac!`);
    }

}