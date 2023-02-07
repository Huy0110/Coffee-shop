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
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width=450
        style="border-radius: 8px;"
    >
      <template v-slot:activator="{ on, attrs }">

        <a  class="hotline_button" v-bind="attrs" v-on="on">
          <v-icon large color="black" style="width: 60px;height: 0;" >mdi-plus-box-outline</v-icon>
<!--          <img style="width: 30px;height: 30px;" src="https://file.hstatic.net/1000075078/file/customer-service-line_2x_e5acb85c9abd40a2a95f2bf1f7253f05.png" alt="" >-->
        </a>
<!--        <div color="black" plain retain-focus-on-click v-bind="attrs" v-on="on" mdi-plus-box-outliine icon >-->
<!--          <v-icon  style="font-size: 160px;">mdi-plus-box-outline</v-icon>-->
<!--        </div>-->

      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Thêm sản phẩm</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" >
                <v-select
                    :items="categories"
                    label="Chọn Category"
                    v-model="selected"
                    dense
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field label="image_url" required v-model="addProduct.addimage_url"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Tên sản phẩm" required v-model="addProduct.addName"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Giá" required v-model="addProduct.addPrice"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Mô tả" required v-model="addProduct.addDescription"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Đóng
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Thêm sản phẩm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <Footer></Footer>

</v-container>
</template>

<script>
export default {
  name: "Icons",

  data() {
    return {
      dialog:false,
      selected: "",
      menuType: 0,
      menuItems: [
        {name: 'Menu'},
        {name: 'Coffee'},
        {name: 'Tra'},
      ],
      categories: [
        { text: 'Tất cả', value: 'Tất cả' },
        { text: 'Cà phê Việt Nam', value: 'Cà Phê Việt Nam' },
        { text: 'Cà phê máy', value: 'Cà phê máy' },
        { text: 'Cold Brew', value: 'Cold Brew' },
      ],
      addProduct: {
        addimage_url: "",
        addName: "",
        addPrice: "",
        addDescription: "",
      },
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

<style scoped>

a /deep/ .mdi-plus-box-outline::before{
    height: 51px;
}
.hotline_button{
  width: 60px;
  height: 60px;
  position: fixed;
  right: 24px;
  bottom: 100px;
  background: whitesmoke;
  border-radius: 50%;
  text-align: center;
  line-height: 76px;
  box-shadow: 0 8px 36px rgb(0 0 0 / 17%);
  z-index: 10;
  padding: 0 !important;
}
</style>
