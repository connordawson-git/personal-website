<template>
  <div >
    <v-container class="pt-5" id="contactUs" fluid>
      <v-layout row wrap justify-center>
        <v-flex xs11 md6>
          <h1 class="py-3 font-weight-bold">Contact Me</h1>
          <ContactForm></ContactForm>
        </v-flex>
        <v-flex data-aos="fade-up-right" data-aos-duration="1500" class="hidden-sm-and-down" md6>
          <img src="img/paperplane.png" alt="paper aeroplane">
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ContactForm from '../components/Contact.vue';
export default {
  components: {
    ContactForm
  },
}
</script>

<style  scoped>
.container{
  max-width: 1350px;
}
img {
  width:100%;
  margin-top: 37%;
}
</style>
