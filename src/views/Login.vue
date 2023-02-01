<template>
  <div id="app" >
    <v-app id="inspire">
      <div class="pa-0" style="max-height: 100vh; overflow: hidden">
        <v-img
          src="https://file.hstatic.net/1000075078/file/combo89_desktop_fb9f6ae2a13a4068a4a2a84d50f21fe3.jpg"
          height="200px"
          width="90vw"

        ></v-img>
        <v-card
          class="mx-auto elevation-5  pa-5"
          max-width="350"
          style="border-radius: 20px; position: relative; top: -50px;align-items: center"
        >
          <v-card-subtitle class="title black--text pa-1 text-center">
            Coffee House Bách Khoa
          </v-card-subtitle>

          <v-card-subtitle class="pa-1 text-center"> Login for admin </v-card-subtitle>
          <div style="left: 0!important;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1 " style="font-size: 1rem;" >Email </h4>
          </div>
          <v-text-field dense color="red" v-model="admin.email"></v-text-field>
          <div style="left: 0!important;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1 " style="font-size: 1rem;" >Mật khẩu </h4>
          </div>
          <v-text-field dense color="red" v-model="admin.password" type="password"></v-text-field>
          <v-card-actions>
            <v-btn color="red" dark block rounded> Login </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
// import AutocompletesSearchAPI from "@/components/vuetifyComponents/autocompletes/AutocompletesSearchAPI";
export default {
  //   el: '#app',
  name: "Login",
  components:{

  },
  //   vuetify: new Vuetify(),
  data: () => ({
    show: false,
    admin:{
      email:"",
      password:"",
    }
  }),
};
</script>
