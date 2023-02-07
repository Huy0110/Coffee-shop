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
        <div v-else>
            <menuOthers :menuType=menuType />
        </div>
    </div>
    <!-- <menuCategory :menuType="category"/> -->

    <!-- <menuMenu/> -->
    <div class="text-center">
        <v-dialog v-model="dialog" width=450 style="border-radius: 8px;">
            <template v-slot:activator="{ on, attrs }">

                <a class="hotline_button" v-bind="attrs" v-on="on">
                    <v-icon large color="black" style="width: 60px;height: 0;">mdi-plus-box-outline</v-icon>
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
                            <v-col cols="12">
                                <v-select :items="categories" label="Chọn Category" v-model="selected" dense></v-select>
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
                    <v-btn color="blue darken-1" text @click="handleThem">
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
import axios from "axios"
export default {
    name: "Icons",

    data() {
        return {
            dialog: false,
            selected: "",
            menuType: 0,
            menuItems: [{
                    name: 'Menu'
                },
                {
                    name: 'Coffee'
                },
                {
                    name: 'Tra'
                },
            ],
            categories: [],
            addProduct: {
                addimage_url: "",
                addName: "",
                addPrice: "",
                addDescription: "",
            },
        }
    },
    created() {
        this.getCategories()
    },
    methods: {
        handleThem() {
            this.dialog = false
            axios
                .post("http://127.0.0.1:8000/api/admin/product/create", {
                    name: this.addProduct.addName,
                    category_id: this.selected,
                    description: this.addProduct.addDescription,
                    price: this.addProduct.addPrice,
                    price_sale: 0,
                    image_url: this.addProduct.addimage_url,
                    active: 1
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },
        getCategories() {
            axios
                .get("http://127.0.0.1:8000/api/admin/category/index")
                .then((response) => {
                    // console.log("START get categories\n");
                    // // console.log("END\n");
                    let categories_list = response.data.Categories;
                    for (let i in categories_list) {
                        let category = categories_list[i]
                        this.categories.push({
                            text: category.name,
                            value: category.id
                        })
                    }

                    for (let i in categories_list) {
                        let category = categories_list[i]
                        for (let index in this.categories) {
                            let category_tmp = this.categories[index]
                            if (category.parent_id == category_tmp.value) {
                                this.categories.splice(index, 1)
                            }
                        }
                    }

                    // console.log(this.categories)
                    // console.log("DONE CATEGORIES with length:", this.categories.length);
                    // console.log("END\n");
                })
                .catch((error) => {
                    console.log(error.response);
                });
            // const response = await abc();
        },
        removeItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        },
    },
    components: {
        // Item: () => import('@/components/Item'),
        // menuCategory: () => import('@/components/adminComponents/menuCategory'),
        menuMenu: () => import('@/components/adminComponents/menuMenu'),
        menuOthers: () => import('@/components/adminComponents/menuOthers'),
        View_Header: () => import('@/layouts/header/View_Header'),
        Footer: () => import('@/layouts/footer/Footer'),
    }
}
</script>

<style scoped>
a /deep/ .mdi-plus-box-outline::before {
    height: 51px;
}

.hotline_button {
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
