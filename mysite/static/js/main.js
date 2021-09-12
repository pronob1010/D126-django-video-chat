console.log("IN Main.js");


var usernameInput = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');

var username;

btnJoin.addEventListener('click', ()=>{
    username = usernameInput.value;

    console.log(username);
    
    if(username == ''){
        return;
    }

    usernameInput.value = '';
    usernameInput.disabled = true;
    usernameInput.style.visibility = 'hidden';

    btnJoin.disabled = true;
    btnJoin.style.visibility = 'hidden';

    var labelUsername = document.querySelector('#label-username');
    labelUsername.innerHTML = username;

    var loc = window.location;
    var wsStart = 'ws://';

    if(loc.protocol == 'https:'){
        wsStart = 'wss://';
    }

    var endPoint = wsStart + loc.host + loc.pathname;

    console.log('endPoint: '+ endPoint);
});