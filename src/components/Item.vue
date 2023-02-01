<template>
  <v-card
    class="mx-auto"
    max-width="344"
    color="transparent"
  >
    <v-img
      :src= 'imageURL'
      height="200px"
    ></v-img>

    <v-card-title style="padding: 12px 0">
      {{name}}
    </v-card-title>

    <v-card-subtitle style="padding: 12px 0">
      {{price}}
    </v-card-subtitle>

    <v-card-actions>
      <!-- <v-btn
        color="orange lighten-2"
        text
      >
        Button
      </v-btn> -->

      <v-row>
        <v-dialog v-model="dialog" persistent max-width="600px" right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" mdi-edit icon>
              <!-- Open Dialog  -->
              <!-- <v-icon icon="fa:fas fa- edit"></v-icon> -->
              <v-icon large>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Chỉnh sửa sản phẩm</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="ImageURL" required v-model="imageURL"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Name" required v-model="name"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Gia" required v-model="price"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea label="Mo ta" required v-model="description"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <!-- <small>*indicates required field</small> -->
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Đóng
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Sửa
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
<!--      <BtnEdit-->
<!--      :imageURL=imageURL-->
<!--      :name=name-->
<!--      :price=price-->
<!--      :description=description-->
<!--      />-->


        <div class="text-center">
          <v-dialog
              v-model="dialog1"
              width=450
              style="border-radius: 8px;"
          >
            <template v-slot:activator="{ on, attrs }">

              <a  class="hotline_button" v-bind="attrs" v-on="on">
                <img style="width: 30px;height: 30px;color: #191919" src="https://free-icons.net/wp-content/uploads/2021/03/symbol079.png" alt="" >
              </a>

            </template>
            <v-card>
              <div  class="hotline  lighten-2 text-center font-weight-thin" style="padding: 26px 0 22px 0;font-family: 'SF Pro Text', sans-serif;">
                Xác nhận xóa sản phẩm ?
              </div>

              <div style="display: flex;justify-content: space-between">
                <v-btn
                    color="orange"
                    text
                    @click="dialog1 = false"
                    style="padding-bottom: 28px;padding-top: 28px;align-items: center;right: -15%;width: 35%"
                    height="32px"
                    class="hotline_call"

                >
                  Xác nhận
                </v-btn>

                <v-btn
                    color="black"
                    text
                    @click="dialog1 = false"
                    style="left: -15%;padding-bottom: 28px;padding-top: 28px;align-items: center;width: 35%"
                    height="32px"
                >
                  Quay lại
                </v-btn>
              </div>
            </v-card>
          </v-dialog>
        </div>

<!--      <template v-slot:activator="{ on, attrs }">-->
<!--        -->
<!--      </template>-->
      <!-- <v-spacer></v-spacer> -->

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import BtnEdit from './vuetifyComponents/BtnEdit.vue'
export default {
    props: {
        imageURL: String,
        name: String,
        description: String,
        price: String,
    },
    name: "Item",
    data: () => ({
      show: false,
      dialog : false,
      dialog1 : false,
    }),
    components: {
      // BtnEdit: () => import("@/components/vuetifyComponents/BtnEdit")
    },
    
}
</script>