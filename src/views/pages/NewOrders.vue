<template>
  <v-container fluid class="topss down-top-padding" >

    <View_Header></View_Header>

    <v-row style="background-color: white">
      <v-col cols="12" sm="6" >
        <v-row>
          <v-col cols="12" sm="12" md="12"  >
            <h2  style="justify-content: center; display: flex;left: 50%; padding: 16px 0;margin-bottom: 12px">New Orders</h2>
          </v-col>
        </v-row>
      </v-col>
      <v-row>
        <v-col cols="6" offset-sm="4" class="mt-2">
          <v-row>
              <v-row class="mt-4 grey--text text--darken-2 font-weight-regular" justify="center" align="center" >TỔNG SỐ ORDER TRONG NGÀY</v-row>
              <v-row class="mt-3 title black--text text--darken-2 font-weight-regular text-h5 " justify="center" align="center" >{{new_orders.length}}</v-row>
          </v-row>
        </v-col>
      </v-row>
      <v-col cols="12" md="12" lg="12">
        <v-row>
          <v-data-table
              disable-sort
              :header-props="{ sortIcon: null }"
              :headers="headers"
              :items="new_orders"
              hide-default-footer
              class="elevation-1"
              style="width: 100%"
          >
<!--            <template v-slot:item.OrderID="{ item }">-->
<!--              <a href="" > item.id </a>-->
<!--            </template>-->
          </v-data-table>
        </v-row>
      </v-col>
    </v-row>
    <Footer></Footer>
  </v-container>
</template>

<script>
export default {
  name: "NewOrders",
  components: {
    View_Header: () => import('@/layouts/header/View_Header'),
    Footer: () => import('@/layouts/footer/Footer'),
  },
  data () {

    return {
      headers: [
        {text: 'Order No', align: 'center', value: 'number', width:'10%',},
        { text: 'OrderID', value: 'id',align: 'center',width: '15%' },
        { text: 'Store', value: 'store',align: 'center',width: '10%' },
        { text: 'Phone Number', value: 'phone',align: 'center',width: '15%' },
        { text: 'Adress', value: 'address',align: 'center',width: '50%' },

      ],
      new_orders: [
        {
          number:'1',
          id: 'TCH2212113498',
          store: 'BACH KHOA',
          phone: '0982145971',
          address:'Số 1 Trần Phú Hà Đông Hà Nội' ,
        },
        {
          number:'2',
          id: 'TCH2212113499',
          store: 'BACH KHOA',
          phone: '0326984172',
          address: 'CT4A , khu đô thị Xala Hà Đông Hà Nội',
        },
        {
          number:'3',
          id: 'TCH2212113500',
          store: 'BACH KHOA',
          phone: '10971485214',
          address: 'CT4C , khu đô thị Xala Hà Đông Hà Nội',
        },
      ],
    }
  },
  computed:{
  //   Total(){
  //     let total =0;
  //     let datasub =  this.products_infor.map(product_infor => Number(product_infor.cash));
  //     for(let i=0;i<datasub.length;i++){
  //       total += (datasub[i]);
  //     }
  //     if(Number.isInteger(total)){
  //       return total+'.000VNĐ';
  //     }else
  //       return total+'VNĐ';
  //
  //
  //   }

  },

};
</script>

<style>
.parent-class >>> .v-toolbar__content {
  padding: 0px !important;
}

.topss{
  align-items: start;
}
</style>
