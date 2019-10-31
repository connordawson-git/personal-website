<template>
    <section class="hero">
            <div class="hero-inner">
                <h1>Connor Dawson</h1>
                <h2>Web Developer!</h2>
            <v-btn
            class="mx-5"
            color="#379683"
            large
            href="/contactUs"
            data-aos="zoom-in"
            data-aos-duration="2000"
            >
            Contact Me
          </v-btn>
            </div>
        </section>
</template>

<script>
    export default {

    }
</script>

<style>
.hero {
    /* Sizing */
    width: 100vw;
    height: 80vh;
    /* Flexbox stuff */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Text styles */
    text-align: center;
    /* Background styles */
    background-image: linear-gradient(rgba(241, 232, 232, 0.699), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.hero-inner {
    background: rgba(115, 149, 174, 0.9);
    padding: 15px;
    border-radius: 15px;
    color: #fff;
}
.hero h1 {
    font-family: 'Staatliches', cursive;
    /* Text styles */
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 0.5em;
}
@media only screen and (max-width: 959px) {
.hero {
    /* Sizing */
    height: 50vh;
}
.hero-inner {
    padding: 5px;
    border-radius: 15px;
}
  .hero h1 {
    font-size: 2rem;
  }
}
</style>