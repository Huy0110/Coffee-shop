<template>
  <v-container fluid class="down-top-padding">

    <v-tabs fixed-tabs>
      <v-tab v-for="menuItem in menuItems" :key="menuItem.name" @click="menuType=menuItem.name">
        {{menuItem.name}}
      </v-tab>
    </v-tabs>





    <div v-if="menuType === 'Menu'">
        <menuMenu></menuMenu>
    </div>
    <div v-else-if="menuType === 'Trà'">
      <menuMenuOthers></menuMenuOthers>
    </div>
    <div v-else-if="menuType === 'Cà phê'">
      <menuMenuOthers></menuMenuOthers>
    </div>
    <div v-else-if="menuType === 'The Coffee House'">
      <v-row>
        <!--     ảnh to mainpage , chiếm 1/2 width -->
        <v-col cols="12" md="6" sm="12" lg="6" >
          <div >
            <a href="#" >
              <img style="width: 100%;padding: 48px 0 24px 0" src="https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg" alt="">
            </a>
          </div>
        </v-col>

        <v-col cols="12" md="6" sm="12" lg="6" style="padding: 48px 12px 24px 12px;font-size: 16px">
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"

                v-for="item in items.slice(0,2)"
                :key="item.name"
            >
              <Item_User
                         :image_url="item.image_url"
                         :name="item.name"
                         :description="item.description"
                         :price="item.price"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            style="margin-bottom: 36px"
            v-for="item in items.slice(2)"
            :key="item.name"
        >
          <Item_User
              :image_url="item.image_url"
              :name="item.name"
              :description="item.description"
              :price="item.price"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" lg="6" sm="12">
          <img src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png" alt="">
        </v-col>

        <v-col cols="12" md="6" lg="6" sm="12">
          <div>
            <img src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png" alt="">
          </div>

          <div class="text_mainpage">
            Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ.
            Chạm môi là foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột ca cao thơm lừng.
            Kế tiếp là tầng trà sữa sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ trọn vị trà sữa đến
            ngụm cuối cùng. 3 tầng hòa quyện, nhấp một ngụm là ghiền, nhớ mãi không thôi.
          </div>


          <v-col
              cols="12"
              sm="6" md="6" lg="6" class="pa-0">
            <a href="#"  class="my-2" style="text-decoration: none;padding: 0;border-radius: 8px" >
              <v-btn
                  x-large
                  color="#B3DDCA"
                  dark
                  width="100%"
              >
                Thử ngay
              </v-btn>
            </a>
          </v-col>


        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="5" lg="5" style="display:flex;flex-wrap: wrap;
                                                                  align-content: center;
                                                                  flex-direction: column;
                                                                  justify-content: center;">
          <h3 style="    font-size: 28px;
                        color: #000000D9;
                        font-family: 'SF Pro Display', sans-serif;
                        font-weight: 600;
                         max-width: 75%;">
            The Coffee House
            <br>
            The Grace Tower
          </h3>
          <p style="    font-size: 16px;
                        line-height: 24px;
                        max-width: 75%;
                        display: -webkit-box;
                        height: 115px;
                        /* -webkit-box-orient: vertical; */
                        overflow: hidden;
                        text-overflow: ellipsis;">
            Nhà mới Quận 7 toạ lạc tại The Grace Tower, thuộc khu phố nhộn nhiệp, sầm uất. Cửa hàng nổi bật với không gian nhỏ nhắn nhưng lại có nhiều nguồn sáng tự nhiên, mang đến sự hứng khởi, năng động
          </p>
          <v-hover v-slot="{ hover }">
          <v-btn
              :color=" hover ? 'red' : 'blue'"
              dark
              large
              width="50%"
          >
            Tìm hiểu thêm
          </v-btn>
            </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="7" lg="7">
          <template>
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows
            >
              <v-carousel-item
                  v-for="(url, i) in urls"
                  :key="i"
              >
                <div style="margin: 36px 0;position: relative">
                  <a href="#" >
                    <img :src=url alt="" style="width: 100%;">
                  </a>
                </div>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-col>
      </v-row>
      <v-row ></v-row>



    </div>

<!--    <v-row>-->
<!--      &lt;!&ndash;     ảnh to mainpage , chiếm 1/2 width &ndash;&gt;-->
<!--      <v-col cols="12" md="6" sm="12" lg="6" >-->
<!--        <div>-->
<!--          <a href="#" >-->
<!--            <img style="width: 100%" src="https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg" alt="">-->
<!--          </a>-->
<!--        </div>-->
<!--      </v-col>-->

<!--      <v-col cols="12" md="6" sm="12" lg="6" >-->
<!--      <v-row>-->
<!--        <v-col-->
<!--            cols="12"-->
<!--            sm="6"-->
<!--            md="6"-->
<!--            lg="6"-->

<!--            v-for="(item,index) in items"-->
<!--            :key="item.name"-->
<!--        >-->
<!--          <Item_User v-if="index <=1"-->
<!--              :image_url="item.image_url"-->
<!--              :name="item.name"-->
<!--              :description="item.description"-->
<!--              :price="item.price"-->
<!--          />-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--      </v-col>-->
<!--    </v-row>-->

<!--    <v-row>-->
<!--      <v-col-->
<!--          cols="12"-->
<!--          sm="6"-->
<!--          md="3"-->
<!--          lg="3"-->

<!--          v-for="item in items.slice(2)"-->
<!--          :key="item.name"-->
<!--      >-->
<!--        <Item_User-->
<!--                   :image_url="item.image_url"-->
<!--                   :name="item.name"-->
<!--                   :description="item.description"-->
<!--                   :price="item.price"-->
<!--        />-->
<!--      </v-col>-->
<!--    </v-row>-->

<!--    <v-row>-->
<!--      <v-col cols="12" md="6" lg="6" sm="12">-->
<!--        <img src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png" alt="">-->
<!--      </v-col>-->

<!--      <v-col cols="12" md="6" lg="6" sm="12">-->
<!--        <div>-->
<!--          <img src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png" alt="">-->
<!--        </div>-->

<!--        <div class="text_mainpage">-->
<!--          Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ.-->
<!--          Chạm môi là foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột ca cao thơm lừng.-->
<!--          Kế tiếp là tầng trà sữa sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ trọn vị trà sữa đến-->
<!--          ngụm cuối cùng. 3 tầng hòa quyện, nhấp một ngụm là ghiền, nhớ mãi không thôi.-->
<!--        </div>-->


<!--          <v-col-->
<!--              cols="12"-->
<!--              sm="6" md="6" lg="6" class="pa-0">-->
<!--            <a href="#"  class="my-2" style="text-decoration: none;padding: 0;border-radius: 8px" >-->
<!--                <v-btn-->
<!--                    x-large-->
<!--                    color="#B3DDCA"-->
<!--                    dark-->
<!--                    width="100%"-->
<!--                >-->
<!--                  Thử ngay-->
<!--                </v-btn>-->
<!--            </a>-->
<!--          </v-col>-->


<!--      </v-col>-->
<!--    </v-row>-->



  </v-container>
</template>
<script>
export default {
  name: "BasicDashboard",
  components: {
    Item_User: () => import("@/components/Item_User"),
    // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
    menuMenu: () => import('@/components/adminComponents/menuMenu'),
    menuMenuOthers: () => import('@/components/adminComponents/menuOthers'),
  },
  data: () => {
    return{
      urls: [
        'https://file.hstatic.net/1000075078/file/_kh_9431__1__e19a7a49963245b39b280271da3cd9fb_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9308_71dd5f99cfe4431a82bbf9dae99f71ea_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9302_5a346ad2dafa4f02afd24481f5ca9a1e_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9290_df84171506554f16b8e55bff9a6c0dd1_master.jpg',
      ],

    items: [
      {
        image_url:
            "https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_016e05cb3a334141898e5677fec34784_large.jpg",
        name: "Cà Phê Sữa Nóng",
        description: "Oishii1",
        price: "19891",
      },
      {
        image_url:
            "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_large.jpg",
        name: "The Coffee House Sữa Đá",
        description: "Oishii2",
        price: "19892",
      },
      {
        image_url:
            "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_966117a7eb0e42d398937f44cc63aca9_large.png",
        name: "Cà Phê Sữa Đá",
        description: "Oishii3",
        price: "19893",
      },
      {
        image_url:
            "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_3df6607180474c2c81dfe213010be685_large.jpg",
        name: "Bạc Sỉu",
        description: "Oishii4",
        price: "19894",
      },
      {
        image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        name: "Tra dao 5",
        description: "Oishii5",
        price: "19895",
      },
      {
        image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        name: "Tra dao 6",
        description: "Oishii6",
        price: "19896",
      },
  ],
    menuType: 'NULL',
    menuItems: [
      {name: 'The Coffee House'},
      {name: 'Cà phê'},
      {name: 'Trà'},
      {name:'Menu'},
    ],
  }
  },
};
</script>

<style scoped>
  .text_mainpage{
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 16px;
  }
</style>