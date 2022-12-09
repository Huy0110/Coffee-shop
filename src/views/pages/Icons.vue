<template>
<v-container>
  <v-tabs fixed-tabs>
    <v-tab v-for="menuItem in menuItems" :key="menuItem.name" @click="menuIype=false">
      {{menuItem.name}}
    </v-tab>
  </v-tabs>

<!-- need to process menuType when click each category -->
  <!-- <menuCategory :menuType="category"/> -->
  <menuMenu/>


</v-container>
</template>

<script>
export default {
  name: "Icons",

  data() {
    return {
      menuType: true,
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
  }
};
</script>
