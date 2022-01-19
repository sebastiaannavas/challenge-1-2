// ENCONTRAR EL PERSONAJE

// Definición de íconos
let star = '⭐️', diamond = '💎', check = '✅'; 
// Definición de personajes
let elfo = '🧝', dracula = '🧛', mago = '🧙', zombie = '🧟‍♂️', heroe = '🦸‍♂️';
// Definición de números de los personajes
let n1 = 1; n2 = 2, n3 = 3, n4 = 4, n5 = 5;

function showMainBar() {
  console.log(`${star}  ${'='.repeat(50)} ${star}`);
}

function showElfo() {
  console.log(`   ${diamond}  Soy un Elfo ${elfo}`);
}

function showDracula() {
  console.log(`    ${diamond}  Soy Drácula ${dracula}`);
}

function showMago() {
  console.log(`    ${diamond}  Soy un Mago ${mago}`);
}

function showZombie() {
  console.log(`    ${diamond}  Soy un Zombie ${zombie}`);
}

function showHeroe() {
  console.log(`    ${diamond}  Soy un Héroe ${heroe}`);
}

function optionsAvatar(value) {
  if(value == 'elfo'){
    n1 = check;
  }
  if(value == 'dracula'){
    n2 == check;
  }
  if(value == 'mago'){
    n3 == check;
  }
  if(value == 'zombie'){
    n4 == check;
  }
  if(value == 'heroe'){
    n5 == check;
  }
  
  console.log(`
    ${n1}   Elfo    ${elfo}
    ${n2}   Drácula ${dracula}
    ${n3}   Mago    ${mago}
    ${n4}   Zombie  ${zombie}
    ${n5}   Héroe   ${heroe}
  `);
}

function showAvatar(name) {
  switch(name){
    case 'elfo':
      showElfo();
      n1 = check;
      optionsAvatar();
      break;
    case 'dracula':
      showDracula();
      n2 = check;
      optionsAvatar();
      break;
    case 'mago':
      showMago();
      n3 = check;
      optionsAvatar();
      break;
    case 'zombie':
      showZombie();
      n4 = check;
      optionsAvatar();
      break;
    case 'heroe':
      showHeroe();
      n5 = check;
      optionsAvatar();
      break;
    default:
      console.log('   * OOPS: personaje no disponible * ');
  }
}

showMainBar();
showAvatar('elfo');
showMainBar();