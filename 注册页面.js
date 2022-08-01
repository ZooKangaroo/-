const myButton = document.querySelector("button");
const myUser = document.getElementById("user");
const myPwd = document.getElementById("pwd");
const myPwd2 = document.getElementById("pwd2");
const myTel = document.getElementById("tel");
const myEmail = document.getElementById("email");
const myUserComplement = document.getElementById("userComplement");
const myPwdComplement = document.getElementById("pwdComplement");
const myPwd2Complement = document.getElementById("pwd2Complement");
const myTelComplement = document.getElementById("telComplement");
const myEmailComplement = document.getElementById("emailComplement");
var userName='',pwdContent='',pwdSecure='',tel='',email='';

myUser.onchange=function(){
    userName = myUser.value;
    if( !userNameJudge(userName) ){
        myUserComplement.textContent="用户名不符合要求！";
        myUserComplement.style.color="red";
    }
    else{
        myUserComplement.textContent="ok";
        myUserComplement.style.color="green";
    }
}
myPwd.onchange=function(){
    pwdContent = myPwd.value;
    var level = userPasswordAssess(pwdContent);
    if( level===0 ){
        myPwdComplement.textContent="密码过短!";
        myPwdComplement.style.color="red";
    }
    else if(level===1){
        myPwdComplement.textContent="密码强度：初级";
        myPwdComplement.style.color="red";
    }
    else if( level===2 ){
        myPwdComplement.textContent="密码强度：中级";
        myPwdComplement.style.color="wheat";
    }
    else{
        myPwdComplement.textContent="密码强度：高级";
        myPwdComplement.style.color="green";
    }
}
myPwd2.onchange=function(){
    pwdSecure = myPwd2.value;
    if( pwdContent!==pwdSecure ){
        myPwd2Complement.textContent="两次输入密码不同！";
        myPwd2Complement.style.color="red";
    }
    else{
        myPwd2Complement.textContent="ok";
        myPwd2Complement.style.color="green";
    }
}
myTel.onchange=function(){
    tel = myTel.value;
    if( !userTelJudge(tel) ){
        myTelComplement.textContent="不符合要求！";
        myTelComplement.style.color="red";
    }
    else{
        myTelComplement.textContent="ok";
        myTelComplement.style.color="green";
    }
}
myEmail.onchange=function(){
    email = myEmail.value;
    if( !userEmailJudge(email) ){
        myEmailComplement.textContent="不符合要求！";
        myEmailComplement.style.color="red";
    }
    else{
        myEmailComplement.textContent="ok";
        myEmailComplement.style.color="green";
    }
}
myButton.onclick = function(){
    
}

function userNameJudge(str){
    var patt = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,9}$/g;
    var str1 = str.match(patt);
    if( str1===null )return false;
    return true;
}
function userPasswordAssess(str){
    if(str.length<=4)return 0;
    if(str.length<=8)return 1;
    var val = [ str.match(/[0-9]/g) , str.match(/[a-z]/g) , str.match(/[A-Z]/g) , str.match(/[^0-9a-zA-Z]/g) ];
    var level=0;
    for( let i=0;i<val.length;++i ){
        if( val[i]!==null )++level;
    }
    return level;
}
function userPasswordJudge(str){
    if( pwdContent!==pwdSecure )return false;
    return true;
}
function userTelJudge(str){
    var patt = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/g
    var str1 = str.match(patt);
    if( str1===null )return false;
    return true;
}
function userEmailJudge(str){
    var patt = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/g;
    var str1 = str.match(patt);
    if( str1===null )return false;
    return true;
}
