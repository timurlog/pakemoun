// IMPORT
import { blaziken, blazikenAttacks, deoxys, deoxysAttacks, enemyHpBar, enemyPokemon, fightGameplay, fightGameplayTextBox, gardevoir, gardevoirAttacks, loseScreen, playerHp, playerHpBar, playerLvl, playerName, playerPokemon, rayquaza, rayquazaAttacks, winScreen } from "./instance.js";
import { ftBlazeKickSfx, ftBounceSfx, ftBulkUpSfx, ftCalmMindSfx, ftDoubleEdgeSfx, ftDragonAscentSfx, ftDragonPulseSfx, ftExtremeSpeedSfx, ftFireBlastSfx, ftFlareBlitzSfx, ftHyperBeamSfx, ftMegaKickSfx, ftPsychicSfx, ftPsychoBoostSfx, ftSelectThemeSfx, ftSolarBeamSfx, ftStopBattleThemeSfx, ftThunderboltSfx, ftVictoryThemeSfx } from "./sound.js";

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
                else if (playerHpPercent <= 25) {
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
                else if (playerHpPercent <= 25) {
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
                else if (playerHpPercent <= 25) {
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
                else if (playerHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
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
                else if (playerHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
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
                else if (playerHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
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
                else if (playerHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
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

// ENEMY BLAZIKEN 1
export function enemyBlazikenA1() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = blaziken;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Blaze Kick!`;
    setTimeout(() => {
        ftBlazeKickSfx();
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
                else if (playerHpPercent <= 25) {
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
                        fightGameplayTextBox.innerHTML = `${gardevoir.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = deoxys.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%'
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                            deoxysAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 800);
    }, 500);
}

// ENEMY BLAZIKEN 2
export function enemyBlazikenA2() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = blaziken;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Flare Blitz!`;
    setTimeout(() => {
        ftFlareBlitzSfx();
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
                else if (playerHpPercent <= 25) {
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
                        fightGameplayTextBox.innerHTML = `${gardevoir.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = deoxys.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%'
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                            deoxysAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 2190);
    }, 500);
}

// ENEMY BLAZIKEN 3
export function enemyBlazikenA3() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = blaziken;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Bulk Up!`;
    setTimeout(() => {
        ftBulkUpSfx();
        setTimeout(() => {
            fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} attack<br>rose slightly`;
            setTimeout(() => {
                enemyActivePokemon.attackOne += 5;
                enemyActivePokemon.attackTwo += 5;
                enemyActivePokemon.attackFour += 5;
                setTimeout(() => {
                    fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                    switch (playerActivePokemon) {
                        case gardevoir:
                            gardevoirAttacks.style.display = 'grid';
                            break;
                        case deoxys:
                            deoxysAttacks.style.display = 'grid';
                            break;
                    }
                }, 1500);
            }, 500);
        }, 1760);
    }, 500);
}

// ENEMY BLAZIKEN 4
export function enemyBlazikenA4() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = blaziken;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Bounce!`;
    setTimeout(() => {
        ftBounceSfx();
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
                else if (playerHpPercent <= 25) {
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
                        fightGameplayTextBox.innerHTML = `${gardevoir.name} fainted!`
                        setTimeout(() => {
                            playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                            playerPokemon.style.transition = '';
                            playerPokemon.style.transform = 'scale(1)';
                            playerName.innerHTML = deoxys.name;
                            playerLvl.innerHTML = "<span>Lv.</span>100";
                            playerHpBar.style.width = '100%'
                            playerHpBar.style.background = '#1ebe41';
                            playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                            deoxysAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1700);
    }, 500);
}

// ENEMY RAYQUAZA 1
export function enemyRayquazaA1() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = rayquaza;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Dragon Ascent!`;
    setTimeout(() => {
        ftDragonAscentSfx();
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
                else if (playerHpPercent <= 25) {
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
                            if (playerActivePokemon == gardevoir) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = deoxys.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1550);
    }, 500);
}

// ENEMY RAYQUAZA 2
export function enemyRayquazaA2() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = rayquaza;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Dragon Pulse!`;
    setTimeout(() => {
        ftDragonPulseSfx();
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
                else if (playerHpPercent <= 25) {
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
                            if (playerActivePokemon == gardevoir) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = deoxys.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1810);
    }, 500);
}

// ENEMY RAYQUAZA 3
export function enemyRayquazaA3() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = rayquaza;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Extreme Speed!`;
    setTimeout(() => {
        ftExtremeSpeedSfx();
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
                else if (playerHpPercent <= 25) {
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
                            if (playerActivePokemon == gardevoir) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = deoxys.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1570);
    }, 500);
}

// ENEMY RAYQUAZA 4
export function enemyRayquazaA4() {
    playerActivePokemon = playerActive();
    enemyActivePokemon = rayquaza;

    fightGameplayTextBox.innerHTML = `The foe's ${enemyActivePokemon.name} used<br>Fire Blast!`;
    setTimeout(() => {
        ftFireBlastSfx();
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
                else if (playerHpPercent <= 25) {
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
                            if (playerActivePokemon == gardevoir) {
                                playerPokemon.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
                                playerPokemon.style.transition = '';
                                playerPokemon.style.transform = 'scale(1)';
                                playerName.innerHTML = deoxys.name;
                                playerLvl.innerHTML = "<span>Lv.</span>100";
                                playerHpBar.style.width = '100%'
                                playerHpBar.style.background = '#1ebe41';
                                playerHp.innerHTML = `${deoxys.hp}/${deoxys.hpMax}`;
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftSelectThemeSfx();
                                fightGameplay.style.display = 'none';
                                loseScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        fightGameplayTextBox.innerHTML = `What will ${playerActivePokemon.name} do?`
                        switch (playerActivePokemon) {
                            case gardevoir:
                                gardevoirAttacks.style.display = 'grid';
                                break;
                            case deoxys:
                                deoxysAttacks.style.display = 'grid';
                                break;
                        }
                    }
                }, 1500);
            }, 500);
        }, 1410);
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
            switch (randomAttack) {
                case 0:
                    enemyBlazikenA1();
                    break;
                case 1:
                    enemyBlazikenA2();
                    break;
                case 2:
                    enemyBlazikenA3();
                    break;
                case 3:
                    enemyBlazikenA4();
                    break;
            }
            break;
        case rayquaza:
            switch (randomAttack) {
                case 0:
                    enemyRayquazaA1();
                    break;
                case 1:
                    enemyRayquazaA2();
                    break;
                case 2:
                    enemyRayquazaA3();
                    break;
                case 3:
                    enemyRayquazaA4();
                    break;
            }
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
                    enemyDeoxysA4()
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
                else if (enemyHpPercent <= 25) {
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
                else if (enemyHpPercent <= 25) {
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
                else if (enemyHpPercent <= 25) {
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
                else if (enemyHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
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
                else if (enemyHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
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
                else if (enemyHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
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
                else if (enemyHpPercent <= 25) {
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
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
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

// GARDEVOIR ATTACK 1
export function playerGardevoirA1() {
    playerActivePokemon = gardevoir;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Psychic!`;
    gardevoirAttacks.style.display = 'none';
    setTimeout(() => {
        ftPsychicSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = rayquaza.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            gardevoirAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${gardevoir.name} do?`
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

// GARDEVOIR ATTACK 2
export function playerGardevoirA2() {
    playerActivePokemon = gardevoir;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Double-Edge!`;
    gardevoirAttacks.style.display = 'none';
    setTimeout(() => {
        ftDoubleEdgeSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = rayquaza.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            gardevoirAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${gardevoir.name} do?`
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 2100);
    }, 500);
}

// GARDEVOIR ATTACK 3
export function playerGardevoirA3() {
    playerActivePokemon = gardevoir;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Calm Mind!`;
    gardevoirAttacks.style.display = 'none';
    setTimeout(() => {
        ftCalmMindSfx();
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
        }, 1000);
    }, 500);
}

// GARDEVOIR ATTACK 4
export function playerGardevoirA4() {
    playerActivePokemon = gardevoir;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Thunderbolt!`;
    gardevoirAttacks.style.display = 'none';
    setTimeout(() => {
        ftThunderboltSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                            enemyPokemon.style.transition = '';
                            enemyPokemon.style.transform = 'scale(1)';
                            enemyName.innerHTML = rayquaza.name;
                            enemyLvl.innerHTML = "<span>Lv.</span>100";
                            enemyHpBar.style.width = '100%'
                            enemyHpBar.style.background = '#1ebe41';
                            gardevoirAttacks.style.display = 'grid';
                            fightGameplayTextBox.innerHTML = `What will ${gardevoir.name} do?`
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1600);
    }, 500);
}


// DEOXYS ATTACK 1
export function playerDeoxysA1() {
    playerActivePokemon = deoxys;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Psycho Boost!`;
    deoxysAttacks.style.display = 'none';
    setTimeout(() => {
        ftPsychoBoostSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            if (enemyActivePokemon == blaziken) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = rayquaza.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 2530);
    }, 500);
}

// DEOXYS ATTACK 2
export function playerDeoxysA2() {
    playerActivePokemon = deoxys;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Solar Beam!`;
    deoxysAttacks.style.display = 'none';
    setTimeout(() => {
        ftSolarBeamSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            if (enemyActivePokemon == blaziken) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = rayquaza.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 2420);
    }, 500);
}

// DEOXYS ATTACK 3
export function playerDeoxysA3() {
    playerActivePokemon = deoxys;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Mega Kick!`;
    deoxysAttacks.style.display = 'none';
    setTimeout(() => {
        ftMegaKickSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            if (enemyActivePokemon == blaziken) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = rayquaza.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 390);
    }, 500);
}

// DEOXYS ATTACK 4
export function playerDeoxysA4() {
    playerActivePokemon = deoxys;
    enemyActivePokemon = enemyActive();

    fightGameplayTextBox.innerHTML = `${playerActivePokemon.name} used<br>Hyper Beam!`;
    deoxysAttacks.style.display = 'none';
    setTimeout(() => {
        ftHyperBeamSfx();
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
                else if (enemyHpPercent <= 25) {
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
                            if (enemyActivePokemon == blaziken) {
                                enemyPokemon.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
                                enemyPokemon.style.transition = '';
                                enemyPokemon.style.transform = 'scale(1)';
                                enemyName.innerHTML = rayquaza.name;
                                enemyLvl.innerHTML = "<span>Lv.</span>100";
                                enemyHpBar.style.width = '100%'
                                enemyHpBar.style.background = '#1ebe41';
                                deoxysAttacks.style.display = 'grid';
                                fightGameplayTextBox.innerHTML = `What will ${deoxys.name} do?`
                            }
                            else {
                                ftStopBattleThemeSfx();
                                ftVictoryThemeSfx();
                                fightGameplay.style.display = 'none';
                                winScreen.style.display = 'block';
                            }
                        }, 1000);
                    }
                    else {
                        enemyTurn(enemyActivePokemon);
                    }
                }, 1500);
            }, 500);
        }, 1880);
    }, 500);
}