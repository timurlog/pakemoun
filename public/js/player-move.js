// IMPORT
import { fightGameplay, fightTransition, playerMove, playerMoveScreenTop } from "./instance.js";
import { ftBattleThemeSfx, ftStopRoadThemeSfx } from "./sound.js";

let i = true

// FUNCTION TO START THE FIGHT
function startFight() {
    playerMoveScreenTop.classList.add('screen-top-sf');
    setTimeout(() => {
        const element = document.getElementById("player");
        element.style.display = 'none';
        playerMoveScreenTop.classList.remove('screen-top-sf');
        playerMove.style.display = 'none';
        fightTransition.style.display = 'block';
        ftStopRoadThemeSfx();
        ftBattleThemeSfx();
        setTimeout(() => {
            fightTransition.style.display = 'none';
            fightGameplay.style.display = 'block';
        }, 5000);
    }, 300);
    move('left', -100);
    move('right', -100);
}

// MOVEMENT FUNCTION
export function movePlayer(evt) {
    const element = document.getElementById("player");
    if (!element.style.left) element.style.left = '970px';
    if (!element.style.top) element.style.top = '460px';

    function move(axis, delta) {
        element.style[axis] = (parseInt(element.style[axis]) + delta) + 'px';
    }

    switch (evt.keyCode) {
        case 65:
            move('left', -10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-left.gif');
                i = false
            }
            break;
        case 68:
            move('left', 10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-right.gif');
                i = false
            }
            break;
        case 87:
            move('top', -10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-front.gif');
                i = false
            }
            break;
        case 83:
            move('top', 10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-back.gif');
                i = false
            }
            break;
    }
    if (element.style.left >= '890px' && element.style.left <= '940px' && element.style.top >= '270px' && element.style.top <= '320px') {
        startFight();
    }
}

// STOP MOVEMENT ANIMATION FUNCTION
export function stopAnimation(evt) {
    const element = document.getElementById("player");
    element.setAttribute('src', './public/assets/image/player/player-stand.png');
    i = true
}