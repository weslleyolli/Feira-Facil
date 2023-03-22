function mostrarUser(){
    var user = document.getElementById('UserInfo');
    if(user.style.display === 'none'){
        user.style.display = 'block';
    }else{
        user.style.display = 'none';
    }
}

function mostrarInfo(){
    var info = document.getElementById('VerMais');
    var body = document.getElementById('background');

    if(info.style.display === 'none'){
        body.classList.add("blur");
        info.style.display = 'block';
    }else{
        info.style.display = 'none';
    }
}

function fecharInfo(){
    var infoOpen = document.getElementById('VerMais');
    var body = document.getElementById('background');

    body.classList.remove("blur");
    infoOpen.style.display = 'none';
}
