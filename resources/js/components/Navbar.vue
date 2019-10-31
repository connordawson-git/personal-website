<template>
  <div id="NAVBAR">

    <!-- navbar drawer -->
    <v-navigation-drawer
      v-model="draw"
      clipped
      fixed
      disable-resize-watcher
      app
      class="hidden-lg-and-up">
      <v-list dense>
        <v-list-tile class="text-uppercase pa-3" v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action class="white--text title">
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text title">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-toolbar class="mb-2" app >
      <v-toolbar-side-icon class="grey--text hidden-lg-and-up" @click="draw = !draw"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase dark--text">
        <img src="img/logo.png" alt="">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class=" hidden-md-and-down">
        <v-btn
          class="nav-link mr-5"
          flat
          href="/"
          >
          <span class="subheading text-uppercase font-weight-medium">Home</span>
        </v-btn>

        <v-btn
          class="nav-link mr-5"
          flat
          href="/contactUs"
          >
          <span class="subheading text-uppercase font-weight-medium">Contact Me</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      draw: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'send', text: 'Contact Me', route: '/contactUs' },
      ]
    }
  }
}
</script>

<style>
.v-toolbar__content {
  height: 90px!important;
}
.v-list__tile__title a {
  text-decoration: none;
  color: #fff;
}

.v-navigation-drawer {
  background-color: #7395ae!important;
}

.nav-link {
  height: 50%!important;
}
.nav-link:hover{
  background-color: #23ae84;
  color: white;
}

</style>
