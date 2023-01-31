<template>
  <v-container fluid class="down-top-padding">

    <View_Header></View_Header>
    <v-row style="background-color: white">
      <v-col cols="12" sm="12" md="12"  >
        <h2  style="justify-content: center; display: flex;left: 50%; padding: 16px 0">CHI TIẾT ĐƠN HÀNG </h2>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col cols="12" md="4"    style=" align-items: center; display: flex;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Tên khách hàng: </h4>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field filled readonly dense hide-details type="text" :value=userOrderInfor.order_username class="v-text-field " solo flat style="justify-content: center" >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col cols="12" md="4"    style=" align-items: center; display: flex;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Số điện thoại: </h4>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field filled readonly dense hide-details type="text" :value=userOrderInfor.order_userphone class="v-text-field " solo flat style="justify-content: center" >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="12">
        <v-row>
          <v-col cols="12" md="2"    style=" align-items: center; display: flex;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Địa chỉ: </h4>
          </v-col>
          <v-col cols="12" md="10">
            <v-text-field filled readonly dense hide-details type="text" :value=userOrderInfor.order_useraddress class="v-text-field " solo flat style="justify-content: center" >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="12">
        <v-row>
          <v-col cols="12" md="2"    style=" align-items: center; display: flex;">
            <h4 class="black--text text--darken-2 font-weight-medium text-subtitle-1  align-center"  style="font-size: 1rem" > Ghi chú: </h4>
          </v-col>
          <v-col cols="12" md="10">
            <v-text-field filled readonly dense hide-details type="text" :value=userOrderInfor.order_note class="v-text-field " solo flat style="justify-content: center" >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="12" lg="12">
        <v-row>
          <div class="offset-md-5 mb-1" >
          <v-card-actions >
            <v-spacer></v-spacer>
            <strong>Thông tin sản phẩm</strong>
          </v-card-actions>
          </div>
          <v-data-table
              dense
              disable-sort
              :header-props="{ sortIcon: null }"
              :headers="headers"
              :items="products_infors"
              hide-default-footer
              class="elevation-1"
              style="width: 100%"
          ></v-data-table>
        </v-row>
      </v-col>

      <v-col cols="12" md="12" lg="12">
        <v-row>
          <div class="offset-md-5  mt-3" >
            <v-card-actions >
              <v-spacer></v-spacer>
              <strong>Thanh toán</strong>
            </v-card-actions>
          </div>
          <v-data-table
              disable-sort
              :header-props="{ sortIcon: null }"
              :headers="payment_headers"
              :items="payment_infor"
              hide-default-footer
              class="elevation-1"
              style="width: 100%"
          ></v-data-table>
        </v-row>
      </v-col>

      <v-row align="center"
             justify="space-around">
        <v-btn
            color="success"
            dark
            large
            class="mt-9 mb-9">
           BẮT ĐẦU GIAO HÀNG
        </v-btn>

        <v-btn
            color="error"
            dark
            large
            class="mt-9 mb-9">
          HỦY
        </v-btn>
      </v-row>
    </v-row>

    <Footer></Footer>
  </v-container>
</template>

<script>

export default {
  name: "OrderDetails",
  components: {
    View_Header: () => import('@/layouts/header/View_Header'),
    Footer: () => import('@/layouts/footer/Footer'),
  },
  data () {
    return {
      headers: [
        {text: 'STT', align: 'center', value: 'number', width:'10%',},
        { text: 'TÊN SẢN PHẨM', value: 'name',align: 'center',width: '40%' },
        { text: 'Topping', value: 'topping_name',align: 'center',width: '30%' },
        {text: 'CỠ',value: 'size',align: "center",width: '10%'},
        { text: 'SỐ LƯỢNG', value: 'amount',align: 'center',width: '10%' },
        { text: 'THÀNH TIỀN', value: 'cash',align: 'center',width: '15%' },
        { text: 'GIẢM GIÁ', value: 'discount',align: 'center',width: '15%' },


      ],
      products_infors: [
        {
          number:'1',
          name: 'TRÀ THẠCH VẢI',
          size :'L',
          amount: 2,
          cash: '100.000',
          discount: 0,
        },
        {
          number:'2',
          name: 'TRÀ THẠCH ĐÀO',
          size :'L',
          amount: 2,
          cash: '110.000',
          discount: 0,
        },
        {
          number:'3',
          name: 'TRÀ THẠCH XOÀI',
          size :'M',
          amount: 1,
          cash: '50.000',
          discount: 0,
        },
        {
          number:'4',
          name: 'TRÀ SEN VÀNG CỦ NĂNG',
          size :'L',
          amount: 3,
          cash: '165.000',
          discount: 0,
        },
        {
          number:'5',
          name: 'TRÀ THANH ĐÀO',
          size :'S',
          amount: 2,
          cash: '100.000',
          discount: 0,
        },
      ],
      payment_headers: [
        {
          text: 'PHƯƠNG THỨC THANH TOÁN',
          align: 'center',
          value: 'method',
          width:'60%',
        },
        { text: 'TỔNG TIỀN', value: 'total',align: 'center',width: '40%' },
      ],
      payment_infor: [
        {
          method:'Tiền Mặt',
          total: '525000',
        },
      ],
      userOrderInfor:{
        order_id:"2",
        order_username:"Phạm Thành Chung",
        order_useraddress:"56a Ngõ 128c Đại La",
        order_userphone:"0971751698",
        order_note:"Không lấy đá"
      }
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
