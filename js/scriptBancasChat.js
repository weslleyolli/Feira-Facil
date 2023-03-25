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