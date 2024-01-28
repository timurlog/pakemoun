// IMPORT
import { playerBlazikenA1, playerBlazikenA2, playerBlazikenA3, playerBlazikenA4, playerRayquazaA1, playerRayquazaA2, playerRayquazaA3, playerRayquazaA4 } from "./fight-gameplay.js";
import { blazikenAttackFourBtn, blazikenAttackOneBtn, blazikenAttackThreeBtn, blazikenAttackTwoBtn, losePlayAgainBtn, rayquazaAttackFourBtn, rayquazaAttackOneBtn, rayquazaAttackThreeBtn, rayquazaAttackTwoBtn, startBtn, teamABtn, teamBBtn, winPlayAgainBtn } from "./instance.js";
import { movePlayer, stopAnimation } from "./player-move.js";
import { teamASelected, teamBSelected } from "./pokemon-selection.js";
import { ftButtonSfx, ftTeamButtonSfx } from "./sound.js";
import { startMenuDisplayNone } from "./start-menu.js";

// STAR MENU
startBtn.addEventListener('click', () => {
    ftButtonSfx();
    startMenuDisplayNone();
});

// POKEMON SELECTION
teamABtn.addEventListener('click', () => {
    ftTeamButtonSfx();
    teamASelected();
});

teamBBtn.addEventListener('click', () => {
    ftTeamButtonSfx();
    teamBSelected();
});

// BLAZIKEN ATTACKS
blazikenAttackOneBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerBlazikenA1();
});

blazikenAttackTwoBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerBlazikenA2();
});

blazikenAttackThreeBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerBlazikenA3();
});

blazikenAttackFourBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerBlazikenA4();
});

// RAYQUAZA ATTACKS
rayquazaAttackOneBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerRayquazaA1();
});

rayquazaAttackTwoBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerRayquazaA2();
});

rayquazaAttackThreeBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerRayquazaA3();
});

rayquazaAttackFourBtn.addEventListener('click', () => {
    ftButtonSfx();
    playerRayquazaA4();
});

// PLAY AGAIN
winPlayAgainBtn.addEventListener('click', () => {
    ftButtonSfx();
    setTimeout(() => {
        location.reload();
    }, 600);
});

losePlayAgainBtn.addEventListener('click', () => {
    ftButtonSfx();
    setTimeout(() => {
        location.reload();
    }, 600);
});

// PLAYER MOVE
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopAnimation);