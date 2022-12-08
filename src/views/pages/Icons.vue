<template>
<v-container>
  <v-tabs fixed-tabs>
    <v-tab v-for="menuItem in menuItems" :key="menuItem.name">
      {{menuItem.name}}
    </v-tab>
  </v-tabs>

  <v-row>
      <v-col cols="12" sm="12" md="6" lg="3" v-for="item in items" :key="item.name">
          <Item :imageURL="item.imageURL" :name="item.name" :description="item.description" :price="item.price"/>
      </v-col>
  </v-row>


</v-container>
</template>

<script>
export default {
  name: "Icons",

  data() {
    return {
      items: [
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 1", description: "Oishii1", price: "19891",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 2", description: "Oishii2", price: "19892",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 3", description: "Oishii3", price: "19893",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 4", description: "Oishii4", price: "19894",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 5", description: "Oishii5", price: "19895",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 6", description: "Oishii6", price: "19896",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 7", description: "Oishii7", price: "19897",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 8", description: "Oishii8", price: "19898",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 9", description: "Oishii9", price: "19899",},
        { imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg", name: "Tra dao 0", description: "Oishii0", price: "19890",},
      ],

      menuItems: [
          {name: 'Tra'},
          {name: 'Coffee'},
          {name: 'Menu'},
      ]
  }},
  components: {
      Item: () => import('@/components/Item'),
      
    //   MenuHeader,
    //   IconsMaterial: () => import('@/components/vuetifyComponents/icons/IconsMaterial'),
    //   IconFontawesome: () => import('@/components/vuetifyComponents/icons/IconFontawesome'),
    //   IconColors: () => import('@/components/vuetifyComponents/icons/IconColors'),
    //   IconButtons: () => import('@/components/vuetifyComponents/icons/IconButtons'),
    //   IconClickable: () => import('@/components/vuetifyComponents/icons/IconClickable'),
    //   IconMdiSvg: () => import('@/components/vuetifyComponents/icons/IconMdiSvg'),
  }
};
</script>
