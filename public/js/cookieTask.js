let now = new Date();//creating date
now.setTime(now.getTime());//setting time

function setCookie(){//setting cookies
    let name = rform.rnickname.value;//inputting name
    document.cookie="name=" + name + ';';//setting name cookie
    let information = rform.contactinfo.value;//inputting country
    document.cookie="information=" + information + ';';//setting info cookie
    let password = rform.rpassword.value;//inputting mail cookie
    document.cookie="password=" + password + ';';//setting password cookie
}

function getCookie(cname) {//cookie get function
    let name = cname + "=";
    let decode = decodeURIComponent(document.cookie);//decoding encoded URI component i.e. makes it readable
    let ca = decode.split(';');//splitting cookie with semicolon
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];//declaring c with name and value
        while (c.charAt(0) == ' ') {//getting rid of empty spaces
            c = c.substring(1);
            console.log(c);
        }
        if (c.indexOf(name) == 0) {//if cookie is found
            return c.substring(name.length, c.length);//returning cookie
        }
    }
    return "";//else return nothing
}

function checkCookie(){//checking if cookie already exists
    let value = getCookie("name");
    if(value != "" && value != "null")
        window.location.replace("/profile");
}

function checkInfo(){
    let name1 = getCookie("name");
    let password1 = getCookie("password");
    let name2 = sform.snickname.value;
    let password2 = sform.spassword.value;
    if(name1 != name2 || password1 != password2){
        alert("Incorrect nickname or password!");
    } else{
        window.location.replace("/profile");
    }
}