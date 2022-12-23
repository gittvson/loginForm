

function login(event) {
    event.preventDefault();

    const myTk = "abc"
    const myMk = "def"
    const tk = document.getElementById("taikhoan").value;
    const mk = document.getElementById("matkhau").value;
    // console.log({ tk, mk });


    if (tk === myTk && mk === myMk) {
        console.log({ tk, mk });
        window.location.assign("http://localhost:5500/main.html");
        return true;
    } else {
        var myAlert = document.getElementById('myToast');//select id of toast
        var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
        bsAlert.show();//show it
    }
    return false
}
document.getElementById('loginBtn').onclick = login;