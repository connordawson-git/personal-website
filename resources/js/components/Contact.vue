<template>
  <div id="contact-form" class="contact-form">
    <form @submit.prevent="submit">
     <div class="form-group">
        <label class="subheading" for="name">Full Name</label>
        <input type="text" class="form-control" name="name" id="name" v-model="fields.name" />
        <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
      </div>

      <div class="form-group">
        <label class="subheading" for="name">Company</label>
        <input type="text" class="form-control" name="company" id="company" v-model="fields.company" />
        <div v-if="errors && errors.company" class="text-danger">{{ errors.company[0] }}</div>
      </div>

      <div class="form-group">
        <label class="subheading" for="email">E-mail</label>
        <input type="email" class="form-control" name="email" id="email" v-model="fields.email" />
        <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
      </div>

      <div class="form-group">
        <label class="subheading" for="telephone">Telephone</label>
        <input type="telephone" class="form-control" name="telephone" id="telephone" v-model="fields.telephone" />
        <div v-if="errors && errors.telephone" class="text-danger">{{ errors.telephone[0] }}</div>
      </div>

      <div class="form-group">
        <label class="subheading" for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="10" v-model="fields.message"></textarea>
        <div v-if="errors && errors.message" class="text-danger">{{ errors.message[0] }}</div>
      </div>

      <v-btn
        type="submit"
        color="rgb(35, 174, 132)"
        class="white--text"
        >
        Send message
      </v-btn>
      <div v-if="success" class="alert alert-success mt-3">
        Message sent!
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
    }
  },
  methods: {
    submit() {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post('/submit', this.fields).then(response => {
          this.fields = {}; //Clear input fields.
          this.loaded = true;
          this.success = true;
        }).catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
      }
    },
  },
}
</script>

<style scoped>
.container{
  max-width: 1350px;
}
.v-btn {
  width: 100%;
}
@media only screen and (max-width: 960px) {
  .v-btn {
    width: 50%;
  }
}
</style>
