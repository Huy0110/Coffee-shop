<template>
<v-container>
  <View_Header></View_Header>
  <v-tabs fixed-tabs>
    <v-tab v-for="menuItem in menuItems" :key="menuItem.name" @click="menuType=false">
      {{menuItem.name}}
    </v-tab>
  </v-tabs>

<!-- need to process menuType when click each category -->
  <!-- <menuCategory :menuType="category"/> -->


  <menuMenu/>
  <Footer></Footer>

</v-container>
</template>

<script>
export default {
  name: "Icons",

  data() {
    return {
      menuType: false,
      menuItems: [
          {name: 'Tra'},
          {name: 'Coffee'},
          {name: 'Menu'},
      ],
  }},
  components: {
      // Item: () => import('@/components/Item'),
      // menuCategory: () => import('@/components/adminComponents/menuCategory'),
      menuMenu: () => import('@/components/adminComponents/menuMenu'),
      View_Header: () => import('@/layouts/header/View_Header'),
      Footer: () => import('@/layouts/footer/Footer'),
  }
};
</script>
