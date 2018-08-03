<template>
  <div class="hello">
    <div class="container" style="max-height:200px">
      <b-jumbotron>
  <template slot="header">
    E-shop
  </template>
  <template slot="lead">
  We welcome all customers to our website. Please let us know if there is anything we can help you with. Your input is important to us.
  </template>
  <hr class="my-4">
  <p>
    E-shop is a website created for buying and selling goods and services.
  </p>
</hr>
  <b-btn variant="outline-primary" href="#">Log in</b-btn>
  <b-btn variant="outline-success" href="#">Shop</b-btn>
</b-jumbotron>
<b-container fluid class="bv-example-row mt-2">
<b-row>
    <b-card-group deck  class="mr-4 ml-3" v-for="product in products" :key='product.id'>
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
  </b-card-group>
</b-row>
</b-container>
</div>
  <div>
    <h1></h1>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed:{
    products () {
      return this.$store.getters.getproducts
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
