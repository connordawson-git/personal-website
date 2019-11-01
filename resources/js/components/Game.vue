<template>
<div id="GAME">
    <v-container class="mt-1" grid-list-xl>
        <v-layout class="card-layout game-greeting-block" row justify-center wrap align-center>
            <v-flex xs12 text-center>
                <h2>Web Development is FUN so with that in mind lets enjoy a game</h2>
            </v-flex>
            <v-flex xs12 text-center>
                <p class="heading">What is your name?</p>
                <input v-model="heroName" placeholder="edit me">
            </v-flex>
        </v-layout >
    </v-container>
    <v-container class="mt-1" grid-list-xl>
        <v-layout class="card-layout" row align-center style="background: rgba(255, 255, 255, 0.3);">
                <v-flex lg6>
                    <h1 class="text-center white--text">{{heroName}}</h1>
                    <div class="healthbar">
                        <div
                            class="healthbar text-center"
                            style="background-color: green; margin: 0; color: white;"
                            :style="{width: playerHealth + '%'}">
                            {{ playerHealth }}
                        </div>
                    </div>
                </v-flex>
                <v-flex lg6>
                    <h1 class="text-center white--text">Monster</h1>
                    <div class="healthbar">
                        <div
                            class="healthbar text-center"
                            style="background-color: green; margin: 0; color: white;"
                            :style="{width: monsterHealth + '%'}">
                            {{ monsterHealth }}
                        </div>
                    </div>
                </v-flex>
            </v-layout >
    </v-container>
    <v-container class="mt-1" grid-list-xl>
        <v-layout class="card-layout" row align-center>
            <v-flex lg12 class=" controls" v-if="!gameIsRunning">
                <v-btn
                color="#aaffb0"
                large
                id="start-game" 
                @click="startGame">
                    START NEW GAME
                </v-btn>
            </v-flex>

            <v-flex lg12 class=" controls" v-else>
                <v-btn
                color="#ff7367"
                large
                id="attack" 
                @click="attack">
                <v-icon>mdi-sword</v-icon>
                    ATTACK
                </v-btn>
                <v-btn
                color="#ffaf4f"
                large
                id="special-attack" 
                @click="attack">
                <v-icon>mdi-sword</v-icon>
                    SPECIAL ATTACK
                <v-icon>mdi-sword</v-icon>
                </v-btn>
                <v-btn
                color="#aaffb0"
                large
                id="heal" 
                @click="heal">
                <v-icon>mdi-heart</v-icon>
                    HEAL
                </v-btn>
                <v-btn
                color="#ffffff"
                large
                id="give-up" 
                @click="giveUp">
                <v-icon>mdi-run</v-icon>
                    GIVE UP
                </v-btn>
            </v-flex>

        </v-layout>
    </v-container>
    <v-container class="mt-1" grid-list-xl>
        <v-layout class="card-layout turns" row align-center>
            <v-flex lg12 class=" log" v-if="turns.length > 0">
                <ul>
                    <li v-for="turn in turns"
                        :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                        {{ turn.text }}
                    </li>
                </ul>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    data: function() {
        return {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        heroName: 'Hero',
        monstername: 'Monster'
        }
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: this.heroName + ' hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(7, 15);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: this.heroName + ' hits Monster hard for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: this.heroName + ' heals for 10'
            });
            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
#GAME {
    background-image: url(https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.heading {
    font-size: 2rem;
}
h2 {
    font-size: 2.2rem;
}
input {
    background-color: white;
    color: black!important;
}
.game-greeting-block{
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
    background: rgba(255, 255, 255, 0.3);
    color: white;
}
.text-center {
    text-align: center;
}

.healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
     background: rgba(255, 255, 255, 0.3);
}

.turns {
    background: rgba(255,255,255, 0.3);
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.3rem;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 0!important;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

</style>