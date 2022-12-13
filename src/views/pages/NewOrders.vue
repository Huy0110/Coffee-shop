<template>
  <v-container fluid class="down-top-padding">
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
              <v-row class="mt-3 title black--text text--darken-2 font-weight-regular text-h5 " justify="center" align="center" >6</v-row>
          </v-row>
        </v-col>
      </v-row>


<!--      <v-col cols="12" sm="12" md="6">-->
<!--        <v-row>-->
<!--          <v-col cols="12" md="4"    style=" align-items: center; display: flex;">-->
<!--            <h4 class="black&#45;&#45;text text&#45;&#45;darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Tên khách hàng: </h4>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="8">-->
<!--            <v-text-field filled readonly dense hide-details type="text" value="Nguyễn Văn A" class="v-text-field " solo flat style="justify-content: center" >-->
<!--            </v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->

<!--      <v-col cols="12" sm="12" md="6">-->
<!--        <v-row>-->
<!--          <v-col cols="12" md="4"    style=" align-items: center; display: flex;">-->
<!--            <h4 class="black&#45;&#45;text text&#45;&#45;darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Số điện thoại: </h4>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="8">-->
<!--            <v-text-field filled readonly dense hide-details type="text" value="0971751699" class="v-text-field " solo flat style="justify-content: center" >-->
<!--            </v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->

<!--      <v-col cols="12" sm="12" md="12">-->
<!--        <v-row>-->
<!--          <v-col cols="12" md="2"    style=" align-items: center; display: flex;">-->
<!--            <h4 class="black&#45;&#45;text text&#45;&#45;darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Địa chỉ: </h4>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="10">-->
<!--            <v-text-field filled readonly dense hide-details type="text" value="1 Đại Cồ Việt , Hai Bà Trưng" class="v-text-field " solo flat style="justify-content: center" >-->
<!--            </v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->

<!--      <v-col cols="12" sm="12" md="12">-->
<!--        <v-row>-->
<!--          <v-col cols="12" md="2"    style=" align-items: center; display: flex;">-->
<!--            <h4 class="black&#45;&#45;text text&#45;&#45;darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Ghi chú: </h4>-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="10">-->
<!--            <v-text-field filled readonly dense hide-details type="text" value="The Coffee House Bách Khoa" class="v-text-field " solo flat style="justify-content: center" >-->
<!--            </v-text-field>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-col>-->

      <v-col cols="12" md="12" lg="12">
        <v-row>
<!--          <div class="offset-md-5 mb-1" >-->
<!--&lt;!&ndash;            <v-card-actions >&ndash;&gt;-->
<!--&lt;!&ndash;              <v-spacer></v-spacer>&ndash;&gt;-->
<!--&lt;!&ndash;              Product Information&ndash;&gt;-->
<!--&lt;!&ndash;            </v-card-actions>&ndash;&gt;-->
<!--          </div>-->
          <v-data-table
              disable-sort
              :header-props="{ sortIcon: null }"
              :headers="headers"
              :items="new_orders"
              hide-default-footer
              class="elevation-1"
              style="width: 100%"
          ></v-data-table>
        </v-row>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "NewOrders",
  data () {
    return {
      headers: [
        {
          text: 'Order No',
          align: 'center',
          value: 'number',
          width:'10%',
        },
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
  // computed:{
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
  // }
};
</script>

<style>

.v-text-field{
  width: 1000px;
}
</style>
