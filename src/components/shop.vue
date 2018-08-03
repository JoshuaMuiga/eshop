<template>
  <div>
    <b-container fluid class="bv-example-row mt-3">
    <b-row>
          <b-card-group deck  class="mr-1 ml-1" v-for="product in products" :key='product.id'>
            <!-- <b-col cols="3"> -->
          <b-card :title="product.name"
                  :img-src="product.ImageUrl"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="width: 12rem;"
                  class="mb-2">
            <p class="card-text">
              {{product.description}}
            </p>
            <b-col md="6" class="py-3">
        <b-btn v-b-popover.hover.focus="product.name" variant="outline-primary">View</b-btn>
      </b-col>
          </b-card>
          <!-- </b-col> -->
        </b-card-group>
    </b-row>
</b-container>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed:{
    products () {
      return this.$store.getters.getproducts
    }
  },
  created () {
    this.$store.dispatch('setProduct')
  }
}
</script>
