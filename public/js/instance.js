import { Pokemon } from "./class.js";

// STAR MENU
export let startMenu = document.querySelector('.start-menu');
export let startMenuTitle = document.querySelector('#startMenuTitle');
export let startBtn = document.querySelector('#startBtn');

// POKEMON SELECTION
export let pokemonSelection = document.querySelector('.pokemon-selection');
export let teamABtn = document.querySelector('#teamA');
export let teamBBtn = document.querySelector('#teamB');
export let teamADisplay = document.querySelector('.team-a-display');
export let teamBDisplay = document.querySelector('.team-b-display');
export let pokemonSelectionTextBox = document.querySelector('.pokemon-selection .text-box p');
export let pokemonSelectionScreenTop = document.querySelector('.pokemon-selection .screen-top');

// PLAYER MOVE
export let playerMove = document.querySelector('.player-move');
export let playerMoveScreenTop = document.querySelector('.player-move .screen-top');

// FIGHT TRANSITION
export let fightTransition = document.querySelector('.fight-transition');
export let enemyLT = document.querySelector('#enemyLT');
export let enemyRT = document.querySelector('#enemyRT');
export let playerLT = document.querySelector('#playerLT');
export let playerRT = document.querySelector('#playerRT');

// FIGHT GAMEPLAY
export let fightGameplay = document.querySelector('.fight-gameplay');
export let fightGameplayScreenTop = document.querySelector('.fight-gameplay .screen-top');

// BLAZIKEN ATTACKS
export let blazikenAttacks = document.querySelector('#blazikenAttacks');
export let blazikenAttackOneBtn = document.querySelector('#blazikenAttackOne');
export let blazikenAttackTwoBtn = document.querySelector('#blazikenAttackTwo');
export let blazikenAttackThreeBtn = document.querySelector('#blazikenAttackThree');
export let blazikenAttackFourBtn = document.querySelector('#blazikenAttackFour');

// RAYQUAZA ATTACKS
export let rayquazaAttacks = document.querySelector('#rayquazaAttacks');
export let rayquazaAttackOneBtn = document.querySelector('#rayquazaAttackOne');
export let rayquazaAttackTwoBtn = document.querySelector('#rayquazaAttackTwo');
export let rayquazaAttackThreeBtn = document.querySelector('#rayquazaAttackThree');
export let rayquazaAttackFourBtn = document.querySelector('#rayquazaAttackFour');

// GARDEVOIR ATTACKS
export let gardevoirAttacks = document.querySelector('#gardevoirAttacks');
export let gardevoirAttackOneBtn = document.querySelector('#gardevoirAttackOne');
export let gardevoirAttackTwoBtn = document.querySelector('#gardevoirAttackTwo');
export let gardevoirAttackThreeBtn = document.querySelector('#gardevoirAttackThree');
export let gardevoirAttackFourBtn = document.querySelector('#gardevoirAttackFour');

// DEOXYS ATTACKS
export let deoxysAttacks = document.querySelector('#deoxysAttacks');
export let deoxysAttackOneBtn = document.querySelector('#deoxysAttackOne');
export let deoxysAttackTwoBtn = document.querySelector('#deoxysAttackTwo');
export let deoxysAttackThreeBtn = document.querySelector('#deoxysAttackThree');
export let deoxysAttackFourBtn = document.querySelector('#deoxysAttackFour');

//POKEMON
export let blaziken = new Pokemon("Blaziken", 187, 187, 85, 120, false, 85);
export let rayquaza = new Pokemon("Rayquaza", 414, 414, 120, 90, 80, 120);
export let gardevoir = new Pokemon("Gardevoir", 175, 175, 90, 120, false, 95);
export let deoxys = new Pokemon("Deoxys", 304, 304, 140, 120, 120, 150);

// SFX
export let buttonSfx = new Audio('./public/assets/music/sfx/button.wav');
export let selectThemeSfx = new Audio('./public/assets/music/sfx/select-menu-theme.wav');
export let roadThemeSfx = new Audio('./public/assets/music/sfx/road-music-theme.wav');
export let battleThemeSfx = new Audio('./public/assets/music/sfx/battle-music-theme.wav');

// ARENA
export let arenaArray = [
    "url('./public/assets/image/arena/arena-01.png')",
    "url('./public/assets/image/arena/arena-02.png')",
    "url('./public/assets/image/arena/arena-03.png')",
    "url('./public/assets/image/arena/arena-04.png')",
    "url('./public/assets/image/arena/arena-05.png')",
    "url('./public/assets/image/arena/arena-06.png')",
    "url('./public/assets/image/arena/arena-07.png')",
    "url('./public/assets/image/arena/arena-08.png')",
    "url('./public/assets/image/arena/arena-09.png')",
    "url('./public/assets/image/arena/arena-10.png')",
    "url('./public/assets/image/arena/arena-11.png')",
    "url('./public/assets/image/arena/arena-12.png')",
    "url('./public/assets/image/arena/arena-13.png')",
    "url('./public/assets/image/arena/arena-14.png')",
    "url('./public/assets/image/arena/arena-15.png')",
    "url('./public/assets/image/arena/arena-16.png')",
    "url('./public/assets/image/arena/arena-17.png')",
    "url('./public/assets/image/arena/arena-18.png')"
];