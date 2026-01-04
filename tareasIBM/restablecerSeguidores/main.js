let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if (count ===10){
        alert("¡Tu publicacion de Instagram gano 10 seguidores! ¡Felcidades!");
    }else if (count === 20){
        alert("¡Tu publicacion de Instagram gano 20 seguidores! ¡Sigue así!");
    }
}


function deleteFollowers(){
    count = 0;

    displayCount();
    
    alert("¡El conteo de seguidores ha sido restablecido!");


}
