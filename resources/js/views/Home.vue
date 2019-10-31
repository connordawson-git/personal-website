<template>
  <div>
    <Greeting></Greeting>
    <HomeCard></HomeCard>
    <Game></Game>
  </div>
</template>

<script>
import Greeting     from '../components/Greeting.vue';
import HomeCard     from '../components/HomeCards.vue';
import Game     from '../components/Game.vue';
export default {
  name: 'Home',
  components: {
    Greeting,
    HomeCard,
    Game
  },
}
</script>

<style scoped>
.container{
  max-width: 1350px;
}

@media only screen and (max-width: 450px) {
  .aboutHeading {
    font-size:1.5rem!important;
  }
}
</style>
