<template>
<v-container>
  <View_Header></View_Header>
  <v-tabs fixed-tabs>
    <v-tab v-for="(menuItem, index) in menuItems" :key="index" @click="menuType=index">
      {{menuItem.name}}
    </v-tab>
  </v-tabs>

<!-- need to process menuType when click each category -->
<div>
  <div v-if="menuType == 0">
    <menuMenu />
  </div>
  <div v-else-if="menuType == 1">
    <menuOthers :menuType=1 />
  </div>
  <div v-else-if="menuType == 2">
    <menuOthers :menuType=2 />
  </div>
</div>
  <!-- <menuCategory :menuType="category"/> -->


  <!-- <menuMenu/> -->
  <Footer></Footer>

</v-container>
</template>

<script>
export default {
  name: "Icons",

  data() {
    return {
      menuType: 0,
      menuItems: [
        {name: 'Menu'},
        {name: 'Coffee'},
        {name: 'Tra'},
      ],
  }},
  components: {
      // Item: () => import('@/components/Item'),
      // menuCategory: () => import('@/components/adminComponents/menuCategory'),
      menuMenu: () => import('@/components/adminComponents/menuMenu'),
      menuOthers: () => import('@/components/adminComponents/menuOthers'),
      View_Header: () => import('@/layouts/header/View_Header'),
      Footer: () => import('@/layouts/footer/Footer'),
  }
};
</script>
