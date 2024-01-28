// IMPORT
import { blaziken, blazikenAttacks, deoxys, deoxysAttacks, enemyHpBar, enemyPokemon, fightGameplayTextBox, gardevoir, gardevoirAttacks, playerHp, playerHpBar, playerLvl, playerName, playerPokemon, rayquaza, rayquazaAttacks } from "./instance.js";
import { ftBlazeKickSfx, ftBounceSfx, ftBulkUpSfx, ftCalmMindSfx, ftDoubleEdgeSfx, ftDragonAscentSfx, ftDragonPulseSfx, ftExtremeSpeedSfx, ftFireBlastSfx, ftFlareBlitzSfx, ftHyperBeamSfx, ftMegaKickSfx, ftPsychicSfx, ftPsychoBoostSfx, ftSolarBeamSfx, ftThunderboltSfx } from "./sound.js";

// ACTIVE POKEMON
let playerActivePokemon;
let enemyActivePokemon;
let enemyHpPercent;
let playerHpPercent;
let randomAttack;

// KNOW PLAYER
export function playerActive() {
    if (playerPokemon.getAttribute('src') == './public/assets/image/pokemon/blaziken-back.gif') {
        return blaziken;
    }
    else if (playerPokemon.getAttribute('src') == './public/assets/image/pokemon/gardevoir-back.gif') {
        return gardevoir;
    }
    else if (playerPokemon.getAttribute('src') == './public/assets/image/pokemon/rayquaza-back.gif') {
        return rayquaza;
    }
    else if (playerPokemon.getAttribute('src') == './public/assets/image/pokemon/deoxys-back.gif') {
        return deoxys;
    }
}

// KNOW ENEMY
export function enemyActive() {
    if (enemyPokemon.getAttribute('src') == './public/assets/image/pokemon/blaziken-front.gif') {
        return blaziken;
    }
    else if (enemyPokemon.getAttribute('src') == './public/assets/image/pokemon/gardevoir-front.gif') {
        return gardevoir;
    }
    else if (enemyPokemon.getAttribute('src') == './public/assets/image/pokemon/rayquaza-front.gif') {
        return rayquaza;
    }
    else if (enemyPokemon.getAttribute('src') == './public/assets/image/pokemon/deoxys-front.gif') {
        return deoxys;
    }
}

// ENEMY GARDEVOIR 1
export function enemyGardevoirA1() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = gardevoir;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Psychic!`;
    setTimeout(() => {
        ftPsychicSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackOne;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }
                
                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }
                
                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${blaziken.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = rayquaza.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%';
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                            rayquazaAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 800);
    }, 500);
}

// ENEMY GARDEVOIR 2
export function enemyGardevoirA2() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = gardevoir;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Double Edge!`;
    setTimeout(() => {
        ftDoubleEdgeSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackTwo;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }
                
                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }
                
                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${blaziken.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = rayquaza.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%'
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                            rayquazaAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 2100);
    }, 500);
}

// ENEMY GARDEVOIR 3
export function enemyGardevoirA3() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = gardevoir;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Calm Mind!`;
    setTimeout(() => {
        ftCalmMindSfx();
        setTimeout(() => {
            fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} attack<br>rose slightly`;
            setTimeout(() => {
                enemyActivePokemon.attackOne += 5;
                enemyActivePokemon.attackTwo += 5;
                enemyActivePokemon.attackFour += 5;
                setTimeout(() => {
                    fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                    switch (playerActivePokemon) {
                        case blaziken:
                            blazikenAttacks.style.display = 'grid';
                            break;
                        case rayquaza:
                            rayquazaAttacks.style.display = 'grid';
                            break;
                    }
                }, 1500);
            }, 500);
        }, 1000);
    }, 500);
}

// ENEMY GARDEVOIR 4
export function enemyGardevoirA4() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = gardevoir;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Thunderbolt!`;
    setTimeout(() => {
        ftThunderboltSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackFour;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }

                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }

                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${blaziken.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = rayquaza.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%'
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                            rayquazaAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1600);
    }, 500);
}

// ENEMY DEOXYS 1
export function enemyDeoxysA1() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = deoxys;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Psycho Boost!`;
    setTimeout(() => {
        ftPsychoBoostSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackOne;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }
                
                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }
                
                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (playerActivePokemon == blaziken) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = rayquaza.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('lose');
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 2530);
    }, 500);
}

// ENEMY DEOXYS 2
export function enemyDeoxysA2() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = deoxys;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Solar Beam!`;
    setTimeout(() => {
        ftSolarBeamSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackTwo;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }
                
                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }
                
                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (playerActivePokemon == blaziken) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = rayquaza.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('lose');
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 2420);
    }, 500);
}

// ENEMY DEOXYS 3
export function enemyDeoxysA3() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = deoxys;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Mega Kick!`;
    setTimeout(() => {
        ftMegaKickSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackThree;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }
                
                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }
                
                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (playerActivePokemon == blaziken) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = rayquaza.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('lose');
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 390);
    }, 500);
}

// ENEMY DEOXYS 4
export function enemyDeoxysA4() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = deoxys;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Hyper Beam!`;
    setTimeout(() => {
        ftHyperBeamSfx();
        setTimeout(() => {
            playerPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                playerPokemon.classList.remove('damageVFX');
                playerActivePokemon.hp = playerActivePokemon.hp - enemyActivePokemon.attackFour;
                playerHpPercent = Math.round((playerActivePokemon.hp / playerActivePokemon.hpMax) * 100);
                if (playerHpPercent < 0) {
                    playerHpPercent = 0;
                }
                playerHpBar.style.transition = 'all 0.3s ease';
                playerHpBar.style.width = playerHpPercent + '%';
                if (playerHpPercent <= 50 && playerHpPercent > 15) {
                    playerHpBar.style.background = '#DF8400'
                }
                else if (playerHpPercent <= 15) {
                    playerHpBar.style.background = '#FF556F'
                }
                else {
                    playerHpBar.style.background = '#1ebe41'
                }

                if (playerActivePokemon.hp < 0) {
                    playerActivePokemon.hp = 0;
                }

                playerHp.innerHTML = `${playerActivePokemon.hp}/${playerActivePokemon.hpMax}`;
                setTimeout(() => {
                    if (playerActivePokemon.hp <= 0) {
                        playerPokemon.style.transition = 'all 1s ease';
                        playerPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (playerActivePokemon == blaziken) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = rayquaza.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${rayquaza.hp}/${rayquaza.hpMax}`;
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('lose');
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case blaziken:
                                blazikenAttacks.style.display = 'grid';
                                break;
                            case rayquaza:
                                rayquazaAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1880);
    }, 500);
}

// ENEMY TUNR ATTACK RANDOM
function enemyTurn(e) {
    randomAttack = Math.floor(Math.random() * 3);
    switch (e) {
        case gardevoir:
            switch (randomAttack) {
                case 0:
                    enemyGardevoirA1()
                    break;
                case 1:
                    enemyGardevoirA2()
                    break;
                case 2:
                    enemyGardevoirA3()
                    break;
                case 3:
                    enemyGardevoirA4()
                    break;
            }
            break;
        case blaziken:
            console.log("gar");
            break;
        case rayquaza:
            console.log("gar");
            break;
        case deoxys:
            switch (randomAttack) {
                case 0:
                    enemyDeoxysA1()
                    break;
                case 1:
                    enemyDeoxysA2()
                    break;
                case 2:
                    enemyDeoxysA3()
                    break;
                case 3:
                    enemyGardevoirA4()
                    break;
            }
            break;
    }
}

// BLAZIKEN ATTACK 1
export function playerBlazikenA1() {
    playerActivePokemon = blaziken;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Blaze Kick!`;
    blazikenAttacks.style.display = 'none';
    setTimeout(() => {
        ftBlazeKickSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackOne;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = deoxys.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            blazikenAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${blaziken.name} do?`
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 800);
    }, 500);
}

// BLAZIKEN ATTACK 2
export function playerBlazikenA2() {
    playerActivePokemon = blaziken;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Flare Blitz!`;
    blazikenAttacks.style.display = 'none';
    setTimeout(() => {
        ftFlareBlitzSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackTwo;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = deoxys.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            blazikenAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${blaziken.name} do?`
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 2190);
    }, 500);
}

// BLAZIKEN ATTACK 3
export function playerBlazikenA3() {
    playerActivePokemon = blaziken;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Bulk Up!`;
    blazikenAttacks.style.display = 'none';
    setTimeout(() => {
        ftBulkUpSfx();
        setTimeout(() => {
            fightGameplayTextBox.innerHTML = `${playerActivePokemon.name}'s attack<br>rose slightly`;
            setTimeout(() => {
                playerActivePokemon.attackOne += 5;
                playerActivePokemon.attackTwo += 5;
                playerActivePokemon.attackFour += 5;
                setTimeout(() => {
                    enemyTurn(enemyActivePokemon);
                }, 1500);
            }, 500);
        }, 1760);
    }, 500);
}

// BLAZIKEN ATTACK 4
export function playerBlazikenA4() {
    playerActivePokemon = blaziken;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Bounce!`;
    blazikenAttacks.style.display = 'none';
    setTimeout(() => {
        ftBounceSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackFour;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = deoxys.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            blazikenAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${blaziken.name} do?`
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1700);
    }, 500);
}

// RAYQUAZA ATTACK 1
export function playerRayquazaA1() {
    playerActivePokemon = rayquaza;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Dragon Ascent!`;
    rayquazaAttacks.style.display = 'none';
    setTimeout(() => {
        ftDragonAscentSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackOne;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (enemyActivePokemon == gardevoir) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = deoxys.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('you win');
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1550);
    }, 500);
}

// RAYQUAZA ATTACK 2
export function playerRayquazaA2() {
    playerActivePokemon = rayquaza;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Dragon Pulse!`;
    rayquazaAttacks.style.display = 'none';
    setTimeout(() => {
        ftDragonPulseSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackTwo;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (enemyActivePokemon == gardevoir) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = deoxys.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('you win');
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1810);
    }, 500);
}

// RAYQUAZA ATTACK 3
export function playerRayquazaA3() {
    playerActivePokemon = rayquaza;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Extreme Speed!`;
    rayquazaAttacks.style.display = 'none';
    setTimeout(() => {
        ftExtremeSpeedSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackThree;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (enemyActivePokemon == gardevoir) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = deoxys.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('you win');
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1570);
    }, 500);
}

// RAYQUAZA ATTACK 4
export function playerRayquazaA4() {
    playerActivePokemon = rayquaza;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Fire Blast!`;
    rayquazaAttacks.style.display = 'none';
    setTimeout(() => {
        ftFireBlastSfx();
        setTimeout(() => {
            enemyPokemon.classList.add('damageVFX');
            fightGameplayTextBox.innerHTML = ``;
            setTimeout(() => {
                enemyPokemon.classList.remove('damageVFX');
                enemyActivePokemon.hp = enemyActivePokemon.hp - playerActivePokemon.attackFour;
                enemyHpPercent = Math.round((enemyActivePokemon.hp / enemyActivePokemon.hpMax) * 100);
                if (enemyHpPercent < 0) {
                    enemyHpPercent = 0;
                }
                enemyHpBar.style.transition = 'all 0.3s ease';
                enemyHpBar.style.width = enemyHpPercent + '%';
                if (enemyHpPercent <= 50 && enemyHpPercent > 15) {
                    enemyHpBar.style.background = '#DF8400'
                }
                else if (enemyHpPercent <= 15) {
                    enemyHpBar.style.background = '#FF556F'
                }
                else {
                    enemyHpBar.style.background = '#1ebe41'
                }
                setTimeout(() => {
                    if (enemyActivePokemon.hp <= 0) {
                        enemyPokemon.style.transition = 'all 1s ease';
                        enemyPokemon.style.transform = 'scale(0)';
                        fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} fainted!`
                        setTimeout(() => {
                            if (enemyActivePokemon == gardevoir) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = deoxys.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                rayquazaAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${rayquaza.name} do?`
                            }
                            else {
                                console.log('you win');
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1410);
    }, 500);
}