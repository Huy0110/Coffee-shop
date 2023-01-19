<template>
  <v-container fluid class="down-top-padding">
    <View_Header></View_Header>
    <v-row class="pt-3">
      <v-col cols="12" sm="12" class="pa-0 " >
        <v-card style="padding: 0 12px">
          <v-row>
              <v-col cols="12" sm="6" >
                <v-row>
                  <v-col cols="12" sm="3" >
                    <v-avatar size="120">
                      <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/avatar-the-coffee-house.png"
                        alt="user"
                        width="300px"
                        class="img-fluid  shadow-sm"
                      />
                    </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <h4 class="mt-3 title black--text text--darken-2 font-weight-regular " >THE COFFEE HOUSE PAYMENT</h4>
                    <h4 class="grey--text text--darken-2 font-weight-light text-subtitle-1 ">THE COFFEE HOUSE-HA NOI</h4>
                    <h4 class="grey--text text--darken-2 font-weight-light text-subtitle-1 mt-n2">The Coffee House Bách Khoa</h4>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" sm="6" class="mt-2">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-row class="mt-4 grey--text text--darken-2 font-weight-regular" justify="center" align="center" >TỔNG TIỀN GD TRONG NGÀY</v-row>
                    <v-row class="mt-3 title black--text text--darken-2 font-weight-regular text-h5 " justify="center" align="center" > {{saleTotal}}VNĐ </v-row>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-row class="mt-4 grey--text text--darken-2 font-weight-regular" justify="center" align="center" >TỔNG SỐ GD TRONG NGÀY</v-row>
                    <v-row class="mt-3 title black--text text--darken-2 font-weight-regular text-h5 " justify="center" align="center" >{{countOrders}}</v-row>
                  </v-col>
                </v-row>
              </v-col>
          </v-row>
          <v-card-title>
            <v-col cols="6" offset-sm="6">
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                dense
                hide-details
            ></v-text-field>
            </v-col>
          </v-card-title>

          <v-data-table
              :headers="headers"
              :items="contents"
              :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <Footer></Footer>
  </v-container>
</template>

<script>

export default {
  name: "PaymentHistory",
  components: {
    View_Header: () => import('@/layouts/header/View_Header'),
    Footer: () => import('@/layouts/footer/Footer'),
  },
  data () {
    return {
      search: '',
      count:0,
      headers: [
        {text: 'THỜI ĐIỂM', align: 'start', sortable: false, value: 'time', width:'16%',},
        { text: 'Mã GIAO DỊCH', value: 'tradingcode' ,width: '16%'},
        { text: 'SỐ TIỀN', value: 'cash',width: '14%' },
        { text: 'TÌNH TRẠNG ', value: 'status',width: '14%' },
        { text: 'GHI CHÚ', value: 'note',width: '40%' },
      ],
      contents: [
        {
          time: '10/12/2022 19:02',
          tradingcode: '22121000003892',
          cash: '40000',
          status: 'Thành công',
          note: 'The Coffee House Bách Khoa',
        },
        {
          time: '10/12/2022 19:05',
          tradingcode: '22121000004493',
          cash: '140000',
          status: 'Thành công',
          note: 'The Coffee House Bách Khoa',
        },
        {
          time: '10/12/2022 19:10',
          tradingcode: '22121000008324',
          cash: '100000',
          status: 'Thành công',
          note: 'The Coffee House Bách Khoa',
        },
        {
          time: '10/12/2022 19:15',
          tradingcode: '22121000009462',
          cash: '40000',
          status: 'Thành công',
          note: 'The Coffee House Bách Khoa',
        },
        {
          time: '10/12/2022 19:39',
          tradingcode: '22121000009811',
          cash: '60000',
          status: 'Thành công',
          note: 'The Coffee House Bách Khoa',
        },
      ],
    }
  },
  computed:{

    saleTotal(){
      let total = 0;
      for(let i = 0 ; i < this.contents.length ; i++){
          total += parseInt(this.contents[i].cash)
      }
      return this.separator(total);
    },
    countOrders(){
      return this.contents.length;
    }
  },
  methods:{
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return str.join(".");
    },
  }
};
</script>
