//pasiimam visus cardus
var element = document.querySelectorAll('.list-group-item');
console.log(element);
var prideti = document.querySelector('.prideti');


//tikrina, ar egzistuoja bent vienas profilis (.card)
function patikra() {
    if (document.querySelector('.card')) {
        document.querySelector('.test').innerHTML = '';
    } else {
        document.querySelector('.test').innerHTML = 'PROFILIU NERA';
    }
};

patikra();

// pasiimam diva, kur desim funkcijos outputa
var kortos = document.querySelector('.kortos');
// mygtuko funkcija
prideti.addEventListener('click', function() {
    // isirenkam visu suvestu lauku vertes
    var vard = document.querySelector('#vardas').value;
    var pav = document.querySelector('#pavarde').value;
    var amz = document.querySelector('#amzius').value;
    var lyt = document.querySelector('#lytis').value;
    // patikrinam ar nera tusciu verciu 
    if (vard == "" || pav == "" || amz == "" || lyt == "" || amz <= 0) {
        document.querySelector('.klaida').innerHTML = 'KALIDA IVEDANT PARAMETRUS!';
        // paraudoninami tik tie laukai, kurie yra neivesti
        if (vard == "") { document.querySelector('.vardas').style.color = 'red'; }
        if (pav == "") { document.querySelector('.pavarde').style.color = 'red'; }
        if (amz == "" || amz <= 0) { document.querySelector('.amzius').style.color = 'red'; }
        if (lyt == "") { document.querySelector('.lytis').style.color = 'red'; }
    } else {
        // Susidedam i kortele. Du budai -> ' + vard + ' ' + pav + ' ARBA -> ${vard} ${pav} (nereikia kabuciu viduje). Jei naudojam $, tai butinai naufoti atbulas kabutes (`).
        var korta = `<div class="col-3 mb-4"><div class="card" style="width: 100%;"><div class="card-body"><h5 class="card-title"><strong>${vard} ${pav}</strong></h5></div><ul class="list-group list-group-flush"><li class="list-group-item">Amžius: <strong>${amz}</strong> </li><li class="list-group-item">Lytis: <strong>${lyt}</strong></li></ul><div class="card-body"><button type="button" class="btn btn-danger delete">Trinti</button></div></div></div>`;
        // pridedam kortele
        kortos.innerHTML += korta;
        // isitrinam suvestas vertes
        document.querySelector('#vardas').value = "";
        document.querySelector('#pavarde').value = "";
        document.querySelector('#amzius').value = "";
        document.querySelector('#lytis').value = "";
    }
    patikra();
});

// kad pasalintu klaidos praneisima ir nuimamas paraudoninimas nuo to lauko, kai pradema koreguoti bet kuri reiksme
document.querySelector('#vardas').addEventListener('input', function() {
    document.querySelector('.vardas').style.color = 'black';
    document.querySelector('.klaida').innerHTML = '';
});

document.querySelector('#pavarde').addEventListener('input', function() {
    document.querySelector('.pavarde').style.color = 'black';
    document.querySelector('.klaida').innerHTML = '';
});

document.querySelector('#amzius').addEventListener('input', function() {
    document.querySelector('.amzius').style.color = 'black';
    document.querySelector('.klaida').innerHTML = '';
});

document.querySelector('#lytis').addEventListener('input', function() {
    document.querySelector('.lytis').style.color = 'black';
    document.querySelector('.klaida').innerHTML = '';
});

// Trinam clickas - pasiimam ta clicka, kuris buo pasirinktas ir tam cardui trinam elementa
document.addEventListener('click', function(e) {
    if (e.target.matches('.delete')) {
        // closest pasirinka artimiausia auksciau esanti elementa
        e.target.closest('.col-3').remove();
    }
    patikra();
});



//----------------------------SCRIPTO pabaiga----------------------------------

// var buttons = document.querySelectorAll('.button');

// unikalus vienas parametras bevardeje funkcijoje
// button.addEventListener('click', function (event) {
//     // ant kurio elemento paspausta
// console.log(event.target);
// // koks evento id ir tt
// console.log(event.target.id);

// });

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function(event) {
//         event.target.style.color = 'red';
//     });
// }

// Event delegation. daro ta pati tik per matches. privalumas tas, kad pasiima visus elementus, nesvarbu, kad skripte jie veliau

// document.addEventListener('click', function(e) {
//     if (e.target.matches('.button')) {
//         console.log(e.target);
//         e.target.style.backgroundColor = 'blue';
//         // e.target.style.color = 'blue';
//     }
// });