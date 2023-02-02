<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-break-point="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="70"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
  >
    <v-list dense nav>
      <!---USer Area -->
      <v-list-item two-line class="px-0">
        <v-list-item-avatar>
          <img src="data:image/png;base64,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" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>The Coffee House</v-list-item-title>
          <v-list-item-subtitle class="caption">Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!---USer Area -->
      <!---Sidebar Items -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :active-class="`success white--text`"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!---Sidebar Items -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [

      {
        title: "Profile",
        icon: "mdi-account-circle",
        to: "/pages/profile"
      },

      {
        title: "Products",
        icon: "mdi-emoticon",
        to: "/pages/icons"
      },

      {
        title: "Payment History",
        icon: "mdi-table-column-width",
        to: "/pages/payment-history"
      },

      {
        title: "New Orders",
        icon: "mdi-order-bool-ascending-variant",
        to: "/pages/new-orders"
      },
    ]
  }),
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      }
    }
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    }
  },

  methods: {}
};
</script>
<style lang="scss">
#main-sidebar{
  box-shadow:1px 0 20px rgba(0,0,0,.08);
  -webkit-box-shadow:1px 0 20px rgba(0,0,0,.08);
  .v-navigation-drawer__border{
    display: none;
  }
  .v-list{
    padding: 8px 15px;
  }
  .v-list-item{
      &__icon--text,
      &__icon:first-child{
        justify-content: center;
        text-align: center;
        width: 20px;
        
      }
      
  }
}
</style>