<script>
import Products from '../components/Products.vue'
import SlideBanner from "../components/SlideBanner.vue"
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Products,
    SlideBanner
  },
}
</script>

<template>
  <div>
    <SlideBanner />
    <Products />
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: "Roboto";
}
</style>