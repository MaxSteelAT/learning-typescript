"use strict";
/*Numbers*/
let interMiami = 11;
let fcDallas = 11;
let Messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += Messi;
        motivo = ' porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('Es un empate');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
