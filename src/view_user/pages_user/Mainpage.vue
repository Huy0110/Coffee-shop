<template>
<v-container>
   <v-row>
<!--     ảnh to mainpage , chiếm 1/2 width -->
     <v-col cols="12" md="6" sm="12" lg="6">
        <div>
          <a href="#">
            <img src="https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg" alt="">
          </a>
        </div>
     </v-col>
      <v-row>
        <v-col cols="12" md="6" lg="6" sm="6">
          <Item></Item>
        </v-col>
        <v-col cols="12" md="6" lg="6" sm="6"></v-col>
      </v-row>

   </v-row>
   <v-row>

   </v-row>
</v-container>
</template>

<script>
export default {
  name: "Mainpage.vue",
  components:{
    Item: () => import('@/components/Item'),
  }
}
</script>

<style scoped>

</style>