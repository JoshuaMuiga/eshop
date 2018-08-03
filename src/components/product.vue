<template>
<div>
  <div>
    <b-container fluid class="bv-example-row">
    <b-row>
        <b-col cols="3">
          <b-card :title="product.name"
                  :img-src="product.img"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
                  <b-button href="#" variant="danger">Cancel</b-button>

                  <!-- Using value -->
                  <b-button href="#" variant="success">Buy now</b-button>

          </b-card>
        </b-col>
        <b-col>
    <p >
      {{product.description}}
    </p>
  </b-col>
    </b-row>
  </b-container>
  </div>
  <div>
  <b-modal id="myModal">
    Hello From My Modal!
  </b-modal>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      product: {id: 1, name: 'Vans', description: 'Vans are great shoes for day to day work. They look good and feel comfortable. They have an array of styles, which means, more to choose from. Try them out and have feel of what a good shoe should feel like!!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtMKrlBNMmNk_CXG4-aGmphY9Aak6BNMkXayPKNglZp1GWlpnvA'}
    }
  }
}
</script>
