<template>
  <div id="fourofour-img">
    <div class="caption">
      <h1 class="display-3 white--text mb-3">404 Page Not Found</h1>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#fourofour-img {
  background-image: url("/img/404image.png");
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.caption {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
}
@media screen and (max-width: 960px) {
  .caption  {
    top: 35%;
  }
}

@media screen and (max-width: 450px) {
  .caption h1 {
    font-size: 2.5rem!important;
  }
}
</style>
