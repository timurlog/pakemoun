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

// FIGHT GAMEPLAY
export let fightGameplay = document.querySelector('.fight-gameplay');

// SFX
export let buttonSfx = new Audio('./public/assets/music/sfx/button.wav');
export let selectThemeSfx = new Audio('./public/assets/music/sfx/select-menu-theme.wav');
export let roadThemeSfx = new Audio('./public/assets/music/sfx/road-music-theme.wav');
export let battleThemeSfx = new Audio('./public/assets/music/sfx/battle-music-theme.wav');