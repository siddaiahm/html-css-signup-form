function validation() {
    let fname = document.getElementById("fName").value;
    let lname = document.getElementById("lName").value;
    let email = document.getElementById("emailId").value;
    let pwd = document.getElementById("pwd").value;
    if (fname == "") {
        document.getElementById("fdiv").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("fNameP").style.display = "block";
        document.getElementById("ferror").style.display = "block";
        document.getElementById("fName").placeholder = "";
        return false;
    }
    if (lname == "") {
        document.getElementById("fdiv").style.borderColor = "hsl(249, 10%, 26%)";
        document.getElementById("fNameP").style.display = "none";
        document.getElementById("ferror").style.display = "none";
        document.getElementById("ldiv").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("lNameP").style.display = "block";
        document.getElementById("lerror").style.display = "block";
        document.getElementById("lName").placeholder = "";
        return false;
    }
    if (email == "") {
        document.getElementById("ldiv").style.borderColor = "hsl(249, 10%, 26%)";
        document.getElementById("lNameP").style.display = "none";
        document.getElementById("lerror").style.display = "none";
        document.getElementById("emaildiv").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("emailP").style.display = "block";
        document.getElementById("emailerror").style.display = "block";
        document.getElementById("emailId").placeholder = "email@example/com";
        return false;
    }
    if (pwd == "") {
        document.getElementById("emaildiv").style.borderColor = "hsl(249, 10%, 26%)";
        document.getElementById("emailP").style.display = "none";
        document.getElementById("emailerror").style.display = "none";
        document.getElementById("pwddiv").style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("pwdP").style.display = "block";
        document.getElementById("pwderror").style.display = "block";
        document.getElementById("pwd").placeholder = "";
        return false;
    }
    return true;
}