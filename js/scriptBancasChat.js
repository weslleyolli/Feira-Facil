function mostrarUser(){
    var user = document.getElementById('UserInfo');
    if(user.style.display === 'none'){
        user.style.display = 'block';
    }else{
        user.style.display = 'none';
    }

}

document.getElementById("banca").addEventListener("click", function() {
    window.location.href = "chatBancaDoAntonio.html";
});

document.getElementById("Back").addEventListener("click", function() {
    window.location.href = "chatBancas.html";
});

document.getElementById("LogoFeira").addEventListener("click", function() {
    window.location.href = "categories.html";
});