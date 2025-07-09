/*Numbers*/
let interMiami: number = 11
let fcDallas: number = 11
let Messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void{
let motivo = ''

  if(juegaMessi) {
  equipo1 += Messi
  motivo = ' porque juega Messi'
}
if(equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
if(equipo1 == equipo2) console.log('Es un empate')
if(equipo1 < equipo2) console.log('Gana FC Dallas')
}

jugar(interMiami, fcDallas, juegaMessi)