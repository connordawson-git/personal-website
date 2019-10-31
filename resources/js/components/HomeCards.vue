<template>
  <v-container class="mt-5" grid-list-xl>
    <v-layout class="card-layout" row justify-space-between wrap align-center>
      <v-flex xs8 md4 lg3>
        <v-card data-aos="fade-up" data-aos-duration="500" class="homeCard text-xs-center elevation-0" height="450px">
          <v-img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            height="auto"
            width="100%"
          ></v-img>
          <v-card-title primary-title class="layout justify-center">
             <div class="headline text-xs-center font"><strong>Web Development</strong></div>
          </v-card-title>
          <v-card-text class="text-xs-center subheading font" >
            Web Development is a mixture of function and design.
            I strive to provide high quality functioning websites that look and feel great
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs8 md4 lg3>
        <v-card data-aos="fade-up" data-aos-duration="500" class="homeCard text-xs-center elevation-0" height="450px">
          <v-img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            height="auto"
            width="100%"
          ></v-img>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-xs-center font"><strong>Ui and UX</strong></div>
          </v-card-title>
          <v-card-text class="text-xs-center subheading font">
            A Web app may ook great but if your customers dont know how to use it, we hae a problem.
            I always design with the end user in mind to ensure they get the most out of their web experience

          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs8 md4 lg3>
        <v-card data-aos="fade-up" data-aos-duration="500" class="homeCard text-xs-center elevation-0" height="450px">
          <v-img
            src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            height="auto"
            width="100%"
          ></v-img>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-xs-center font"><strong>Bespoke Solutions</strong></div>
          </v-card-title>
          <v-card-text class="font text-xs-center subheading">
            Every individual has bespoke needs which require bespoke solutions.
            I look to collaborate with clients to find the best solution for their needs
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  max-width: 1600px!important;
}
.font {
  font-family: 'Staatliches', cursive;
}
.v-btn {
  width: 200px;
}
@media only screen and (max-width: 959px) {
  .homeCard {
    height: auto!important;
    margin-bottom: 15px;

  }
  .card-layout {
    justify-content: center;
  }
}
</style>
