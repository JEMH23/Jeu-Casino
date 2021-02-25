// Ici le JS
/*
    Il doit y avoir un credit de 50€ au démarrage, cette information doit afficher dans un message au démarrage. 
    Vous devez pouvoir augmenter ou diminuer la mise, qui est de 5€ par défaut
    Lorsqu'on clique sur "jouer" les rouleaux doivent defilé et afficher une image aléatoire, les images sont dans le dossier img
    Le jeux doit calculer votre gain ou perte.
    Le gain ou la perte doit être affiché dans un message sous la grande image
*/

// window.onload = debut;

//


//Variables ID :
var btnDecBet = document.getElementById('dec-bet');
var btnIncBet = document.getElementById('inc-bet');
var bet = document.getElementById("bet");
var amount = document.getElementById('amount');
var btnReset = document.getElementById('reset');
var btnPlay = document.getElementById('play');
var gain = document.getElementById('gain');
var solde = document.getElementById('solde');


var currentBet = parseInt(bet.innerHTML);
var recompence2 = amount.value*10;
// les images
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

argent = Math.floor(Math.random());

var images = ['bars.png', 'bell.png', 'cherry.png', 'diamond.png', 'heart.png', 'horseshoe.png', 'lemon.png', 'seven.png', 'watermelon.png'];


function pickImages() {
    newimg1 = Math.floor(Math.random() * images.length);
    console.log(newimg1);
    img1.setAttribute('src', './img/' + images[newimg1]);
    newimg2 = Math.floor(Math.random() * images.length);
    console.log(newimg2);
    img2.setAttribute('src', './img/' + images[newimg2]);
    newimg3 = Math.floor(Math.random() * images.length);
    console.log(newimg3);
    img3.setAttribute('src', './img/' + images[newimg3]);
}

function reset(){
    amount.value = 50;
    bet.innerHTML = 5;
    currentBet = 5;
}

function recompence(){
    if(img1.src == img2.src  && img2.src == img3.src){
        alert('vous avez gagne x10');
    } else if(img1.src == img2.src || img2.src == img3 || img1.src == img3.src){
        alert('vous avez gagne x2');
    }
}


function play(){
    //btnPlay = setTimeout(20);
    recompence();
}


// ECOUTEUR D'EVENEMENTS
btnPlay.addEventListener('click',function() {
    pickImages();
    play();
});

btnReset.addEventListener('click', reset);

btnIncBet.addEventListener('click', function(){
    currentBet += 1;
    bet.innerHTML = currentBet;
});

btnDecBet.addEventListener('click', function(){
    currentBet -= 1;
    bet.innerHTML = currentBet;
});

//debut initialisation

(function init() {
    reset();
    pickImages();
})();