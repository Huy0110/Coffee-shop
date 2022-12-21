<template>
  <div id="app">
    <v-app id="inspire">
      <div class="pa-0" style="max-height: 100vh; overflow: hidden">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="100px"
          width="100vw"
        ></v-img>
        <v-card
          class="mx-auto elevation-5 text-center pa-5"
          max-width="350"
          style="border-radius: 20px; position: relative; top: -50px"
        >
          <v-card-subtitle class="title black--text pa-1">
            Coffee House
          </v-card-subtitle>
          <v-card-subtitle class="pa-1"> Login for user </v-card-subtitle>
          <v-text-field hide-details color="red" label="email"></v-text-field>
          <v-text-field color="red" label="password" type="password"></v-text-field>
          <v-card-actions>
            <v-btn color="red" dark block rounded> Login </v-btn>
          </v-card-actions>
          <span class="mt-2 subtitle-2 primary--text" style="cursor: pointer"
            >Forget password?</span
          >
        </v-card>
        <div class="text-center" style="position: relative; top: -40px">
          <p class="ma-0">- Or log in with -</p>
          <v-btn color="grey" rounded outlined class="ma-2" width="200"
            ><v-icon left color="blue">mdi-facebook</v-icon>Facebook</v-btn
          ><br />
          <v-btn color="grey" rounded outlined class="ma-2" width="200"
            ><v-icon left color="red">Google</v-icon>7</v-btn
          >
          <p class="mt-3">
            Don't have acount?<span class="red--text" style="cursor: pointer"
              >Register</span
            >
          </p>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  //   el: '#app',
  name: "LoginUser",
  //   vuetify: new Vuetify(),
  data: () => ({
    show: false,
  }),
};
</script>
