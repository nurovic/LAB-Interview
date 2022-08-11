<script>
import Category from "./Category"
import TopBar from "./TopBar"
export default {
components:{
  Category,
  TopBar
}
}
</script>

<template>
  <div class="navbar-container-general">
    <TopBar />
    <Category />
  </div>
  
</template>

<style>

@media  (max-width: 375px) {
.navbar-container-general{
    width: 375px;
    height: 56px;
}
}
</style>