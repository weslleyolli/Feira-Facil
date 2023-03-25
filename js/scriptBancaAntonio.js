let bloqueioVerMais = false;

let inputs = document.querySelectorAll('input');
let links = document.querySelectorAll('a');

function mostrarUser(){
    if(!bloqueioVerMais){
        let user = document.getElementById('UserInfo');
        if(user.style.display === 'none'){
            user.style.display = 'block';
        }else{
            user.style.display = 'none';
        }
    }
}

function mostrarInfo(){
    let info = document.getElementById('VerMais');
    let body = document.getElementById('background');

    if(info.style.display === 'none'){
        body.classList.add("blur");
        info.style.display = 'block';
        bloqueioVerMais = true;
    }else{
        info.style.display = 'none';
    }
}

function fecharInfo(){
    let infoOpen = document.getElementById('VerMais');
    let body = document.getElementById('background');

    body.classList.remove("blur");
    infoOpen.style.display = 'none';
    bloqueioVerMais = false;
}
