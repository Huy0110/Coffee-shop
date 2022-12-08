<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src= "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{name}}
    </v-card-title>

    <v-card-subtitle>
      {{price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Button
      </v-btn>

      <v-spacer></v-spacer>

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
    }),
}
</script>