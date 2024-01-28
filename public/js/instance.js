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
export let fightGameplayTextBox = document.querySelector('.fight-gameplay .text-box p');
export let playerPokemon = document.querySelector('#playerPokemon');
export let enemyPokemon = document.querySelector('#enemyPokemon');
export let playerName = document.querySelector('#playerName');
export let playerLvl = document.querySelector('#playerLvl');
export let playerHp = document.querySelector('#playerHp');
export let enemyName = document.querySelector('#enemyName');
export let enemyLvl = document.querySelector('#enemyLvl');
export let enemyHpBar = document.querySelector('.enemy-pv-bar');
export let playerHpBar = document.querySelector('.player-pv-bar');

// WIN / LOSE
export let winScreen = document.querySelector('.win');
export let loseScreen = document.querySelector('.lose');
export let winPlayAgainBtn = document.querySelector('#winPlayAgain');
export let losePlayAgainBtn = document.querySelector('#losePlayAgain');

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
export let blaziken = new Pokemon("Blaziken", 467, 467, 85, 120, false, 85);
export let rayquaza = new Pokemon("Rayquaza", 1035, 1035, 120, 90, 80, 120);
export let gardevoir = new Pokemon("Gardevoir", 437, 437, 90, 120, false, 95);
export let deoxys = new Pokemon("Deoxys", 760, 760, 140, 120, 120, 150);

// SFX
export let buttonSfx = new Audio('./public/assets/music/sfx/button.wav');
export let teamButtonSfx = new Audio('./public/assets/music/sfx/team-button.wav');
export let selectThemeSfx = new Audio('./public/assets/music/sfx/select-menu-theme.wav');
export let roadThemeSfx = new Audio('./public/assets/music/sfx/road-music-theme.wav');
export let battleThemeSfx = new Audio('./public/assets/music/sfx/battle-music-theme.wav');
export let victoryThemeSfx = new Audio('./public/assets/music/sfx/victory-music-theme.wav');

// POKEMON SFX
export let blazeKickSfx = new Audio('./public/assets/music/pokemon-sfx/blaze-kick.wav');
export let flareBlitzSfx = new Audio('./public/assets/music/pokemon-sfx/flare-blitz.wav');
export let bulkUpSfx = new Audio('./public/assets/music/pokemon-sfx/bulk-up.wav');
export let bounceSfx = new Audio('./public/assets/music/pokemon-sfx/bounce.wav');
export let psychicSfx = new Audio('./public/assets/music/pokemon-sfx/psychic.wav');
export let doubleEdgeSfx = new Audio('./public/assets/music/pokemon-sfx/double-edge.wav');
export let calmMindSfx = new Audio('./public/assets/music/pokemon-sfx/calm-mind.wav');
export let thunderboltSfx = new Audio('./public/assets/music/pokemon-sfx/thunderbolt.wav');
export let psychoBoostSfx = new Audio('./public/assets/music/pokemon-sfx/psycho-boost.wav');
export let solarBeamSfx = new Audio('./public/assets/music/pokemon-sfx/solar-beam.wav');
export let megaKickSfx = new Audio('./public/assets/music/pokemon-sfx/mega-kick.wav');
export let hyperBeamSfx = new Audio('./public/assets/music/pokemon-sfx/hyper-beam.wav');
export let dragonAscentSfx = new Audio('./public/assets/music/pokemon-sfx/dragon-ascent.wav');
export let dragonPulseSfx = new Audio('./public/assets/music/pokemon-sfx/dragon-pulse.wav');
export let extremeSpeedSfx = new Audio('./public/assets/music/pokemon-sfx/extreme-speed.wav');
export let fireBlastSfx = new Audio('./public/assets/music/pokemon-sfx/fire-blast.wav');

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