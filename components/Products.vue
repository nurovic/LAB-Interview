<script>
import ProductList from "./ProductList"
export default {
    components:{
        ProductList
    }

}
</script>

<template>
  <div class="products-container">
    <h2 class="product-title">Featured products</h2>
    <ProductList />
  </div>
</template>

<style>

.product-title:before,
.product-title:after {
    content: '';
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
    color: rgba(0, 153, 168, 0.1);
}

.product-title:after {
    margin: 0 0 0 20px;
}

.product-title {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;

    color: #0099A8;
}

@media screen and (max-width: 375px) {

}
</style>