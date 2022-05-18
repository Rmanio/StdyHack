
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
    let element = document.getElementsByClassName("name");
    let value = getCookie("name");
    if(value != "" && value != "null")
         alert("Your name: " + value);
}

function changePassword(){
    let password = prompt();
    document.cookie="password=" + password + ';';
}

function changeName(){
    let name = prompt();
    document.cookie="name=" + name + ';';
}