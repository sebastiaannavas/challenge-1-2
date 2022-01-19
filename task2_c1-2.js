// RENDERIZADO DE MAPAS

//Definicion de iconos
let start = '🟢', line = '▫', finish = '🚩';

//Definicion de objetos del mapa
let mapObjects = [];
let elfObjects = ['◻','🌷','🌲','🗻','🧝','🛕'];
let draculaObjects = ['◻','⚡','🌪','🏰','🧛','🩸'];
let wizardObjects = ['◻','🪐','🌌','🏢','🧙','🔮'];
let zombieObjects = ['◻','🌾','🏕','🏃','🧟','🧠'];
let heroObjects = ['◻','☁','🏠','🚗','🦸','👩'];

// Definicion de mapas

let map = [];

let elfMap = [
  ['s', 1, 2, 1, 2, 1, 2, 1],
  [0, 0, 0, 1, 0, 0, 0, 3],
  [1, 2, 0, 0, 0, 2, 0, 1],
  [2, 1, 2, 3, 2, 1, 0, 3],
  [1, 2, 3, 2, 1, 2, 0, 'f'],
];

let draculaMap = [
  ['s', 0, 0, 2, 1, 2, 1, 2],
  [2, 3, 0, 1, 2, 3, 0,'f'],
  [1, 2, 0, 0, 0, 2, 0, 2],
  [2, 3, 1, 3, 0, 0, 0, 3],
  [1, 2, 3, 2, 3, 2, 3, 2],
];

let wizardMap = [
  ['s', 2, 2, 2, 0, 0, 0,'f'],
  [0, 2, 2, 1, 0, 2, 3, 2],
  [0, 2, 3, 2, 0, 0, 2, 2],
  [0, 0, 0, 0, 3, 0, 1, 2],
  [2, 2, 2, 0, 0, 0, 2, 2],
];

let zombieMap = [
  ['s', 1, 1, 1, 1, 1, 1, 1],
  [0, 2, 0, 0, 0, 2, 3, 1],
  [0, 0, 0, 1, 0, 1, 1, 1],
  [1, 1, 3, 1, 0, 2, 1, 1],
  [1, 3, 1, 1,'f', 1, 1, 1],
];

let heroMap = [
  ['s', 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 3, 0, 0, 0, 2, 1],
  [0, 1, 2, 0, 2, 0, 3, 'f'],
  [0, 0, 0, 0, 3, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

function showBar() {
  console.log(`${start}  ${line.repeat(10)} ${finish} \n`);
}

function setMap() {
  
  for(let row = 0 ; row < map.length ; row++) {
    let col = 0;
    let colLen = map[0].length;
    for(; col < colLen ; col++) {  // colLen = 8;
      if(map[row][col] == 0) {
        map[row][col] = mapObjects[0];
      }
      if(map[row][col] == 1) {
        map[row][col] = mapObjects[1];
      }
      if(map[row][col] == 2) {
        map[row][col] = mapObjects[2];
      }
      if(map[row][col] == 3) {
        map[row][col] = mapObjects[3];
      }
      if(map[row][col] == 's') {
        map[row][col] = mapObjects[4];
      }
      if(map[row][col] == 'f') {
        map[row][col] = mapObjects[5];
      }
    }
  }
}

function getMap() {
  for(let row = 0 ; row < map.length ; row++) {
    console.log(map[row][0], map[row][1], map[row][2], 
                map[row][3], map[row][4], map[row][5], 
                map[row][6], map[row][7]);
  }
}

function showMap(name) {
  switch(name) {
    case 'elfo':
      mapObjects = elfObjects;
      map = elfMap;
      setMap();
      getMap();
      break;
    case 'dracula':
      mapObjects = draculaObjects;
      map = draculaMap;
      setMap();
      getMap();
      break;
    case 'mago':
      mapObjects = wizardObjects;
      map = wizardMap;
      setMap();
      getMap();
      break;
    case 'zombie':
      mapObjects = zombieObjects;
      map = zombieMap;
      setMap();
      getMap();
      break;  
    case 'heroe':
      mapObjects = heroObjects;
      map = heroMap;
      setMap();
      getMap();
      break;
  }
}

showBar();
showMap('elfo');

// los mapas se pueden guardar en funciones sin necesidad de RETURN y al invocarse, mostrarán el mapa. 