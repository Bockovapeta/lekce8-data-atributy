

/*

let prvniOvoce = document.getElementById('muj-div').dataset.ovoce;
let druheOvoce = document.querySelector('#muj-druhy-div').dataset.ovoce;
console.log(prvniOvoce);
console.log(druheOvoce);

let dataUrl = document.querySelector('body').dataset.dataUrl;
console.log(dataUrl);


*/

/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/



const obrazky = document.querySelectorAll('img');

obrazky.forEach((obrazek) => {
    obrazek.addEventListener('click', zobrazKalorie);
});

function zobrazKalorie(udalost) {
    let obrazek = udalost.target;
    let kalorie = obrazek.dataset.kalorie;
    let zemepuvodu = obrazek.dataset.zemePuvodu;
    let ovoce = obrazek.dataset.ovoce;

    let soucetKaloriiElement = document.querySelector('#celkem');
    // potřebuji dát funkci parseInt, který nebude brát v potaz text, ale bude k datům přistupovat jako k číslům
    let celkemKalorii = parseInt(kalorie) + parseInt(soucetKaloriiElement.textContent);

    soucetKaloriiElement.textContent = celkemKalorii;

    let vysledek = document.querySelector('#vysledek');
    vysledek.textContent = ('Právě jsi snědla ' + ovoce
        + ', země původu je ' + zemepuvodu);

    let snezeno = document.querySelector('#snezeno');
    snezeno.appendChild(obrazek);
    obrazek.removeEventListener('click', zobrazKalorie);
}