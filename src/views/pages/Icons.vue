<template>
<v-containeer>
  <v-tabs fixed-tabs>
    <v-tab>
      Tra
    </v-tab>
    <v-tab>
      Cafe
    </v-tab>
    <v-tab>
      Menu
    </v-tab>
  </v-tabs>
  <v-row>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3">
          <Item/>
      </v-col>
  </v-row>


</v-containeer>
</template>

<script>
export default {
  name: "Icons",

  data: () => ({
  }),
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
