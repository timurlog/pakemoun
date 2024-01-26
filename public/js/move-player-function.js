let i = true

export function movePlayer(evt) {
    const element = document.getElementById("player");
    if (!element.style.left) element.style.left = '970px';
    if (!element.style.top) element.style.top = '460px';

    function move(axis, delta) {
        element.style[axis] = (parseInt(element.style[axis]) + delta) + 'px';
    }

    switch (evt.keyCode) {
        case 65:
            if (element.style.left == '690px') {
                return
            }
            move('left', -10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-left.gif');
                i = false
            }
            break;
        case 68:
            if (element.style.left == '1140px') {
                return
            }
            move('left', 10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-right.gif');
                i = false
            }
            break;
        case 87:
            if (element.style.top == '150px') {
                return
            }
            move('top', -10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-front.gif');
                i = false
            }
            break;
        case 83:
            if (element.style.top == '470px') {
                return
            }
            move('top', 10);
            if (i == true) {
                element.setAttribute('src', './public/assets/image/player/player-walk-back.gif');
                i = false
            }
            break;
    }
}

export function stopAnimation(evt) {
    const element = document.getElementById("player");
    element.setAttribute('src', './public/assets/image/player/player-stand.png');
    i = true
}