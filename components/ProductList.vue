<script>
import { mapActions } from "vuex";

export default {
    data(){
        return{
            products: [],
            isLoading: true
        }
    },
    methods: {
    ...mapActions("Product", ["getProducts"]),
    async getProduct(){
        this.products = await this.getProducts()
    }
  },
    async mounted() {
    await this.getProduct();
    this.isLoading = false
  },
}
</script>


<template>
    <div class="product-list-container">
        <div v-if="isLoading">Loading...</div>
        <div v-else class="product-card" v-for="product in products" :key="product.id">
            <div class="img-container">
                <div class="product-img-container">
                    <img class="product-image" :src="product.thumbnail" :alt="product.thumbnail" />
                </div>
                <div class="quick-container">
                    <div class="quick-view">
                        <img class="quick-icon" src="../assets/view.png" alt="">
                    <p>Quick View</p>
                    <div class="divider"></div>
                        <img class="quick-icon" src="../assets/order.png" alt="">
                    <p>Add</p>
                </div>
                </div>
            </div>
            <div class="product-info">
                <div class="price">{{
                    new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(product.price)
                }} TL</div>
                <div class="product-name">{{product.title}}</div>
            </div>
            <div class="button-container">
                <button class="button-add">
                <img class="quick-icon" src="../assets/order.png" alt="">
                <span>ADD</span>
            </button>
            </div>
        </div>
    </div>
</template>

<style>
.product-list-container{
    display: flex;
    margin:40px 140px;
}
.product-card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin-right: 40px;
    width: 260px;
    height: 328px;

    background: #FFFFFF;

    border: 1px solid rgba(236, 236, 236, 0.5);

    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
}
.product-card:hover{
    box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.04), 0px 1px 8px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
}
.product-card:hover .quick-container{
    opacity: 1;
}
.img-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 258px;
    height: 184px;
    background: rgba(236, 236, 236, 0.16);
}
.product-image{
    width: 258px;
    height: 184px;
    object-fit:cover;
}
.product-info{
    padding: 32px;
}
.price{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    display: flex;
    align-items: center;

    color: #2A2A48;
}
.product-name{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #485363;
}
.divider{
    border:none;
    border-left: solid;
    background: #ECECEC;
    opacity: 0.2;
    margin: 0 14px;
}
.quick-container{
    position: relative;
    bottom:42px;
    display:flex;
    height: 48px;
    transition: all 0.2s ease;
    opacity:0;
}   
.quick-view{
    padding: 12px 37.5px;
    background: rgba(0, 0, 0, 0.8);
    display:flex;
    justify-content: center;
    width: 258px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
}
.quick-icon{
    height: 14px;
    margin-right:8px;
}
.button-container{
display: none;
}
</style>

<style>
@media screen and (max-width: 375px) {
.product-list-container{
    display: grid;
    grid-template-columns: 180px 90px;
    margin:0 0;
    width: 375px;
    margin-top:20px ;
}
.product-card{
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin:0 16px 16px 16px;
    width: 163.5px;

    background: rgba(236, 236, 236, 0.16);
}
.img-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 163.5px;
    height: 207.33px;
    background: rgba(236, 236, 236, 0.16);
}
.product-image{
    width: 163.5px;
    height: 207.33px;
    object-fit:cover;
} 
.product-card:hover .quick-container{
    opacity: 0;
}
.product-info{
    flex-direction: column;
    height: 130px;
    width: 131.5px;
    padding: 0px;
}
.quick-view{
    display: none;
}
.button-container{

    display: flex;
    width: 163.5px;
    height: 64px;
}
.button-add{
    width: 131.5px;
    height: 32px;
    border: none;
    margin: 16px;
    background: #FF27AD;
    border-radius: 4px;
    color:#FFF;
}
.price{
    margin:16px 0px 8px 0px;
}
.product-name{
    font-size: 14px;
line-height: 24px;
/* or 171% */

display: flex;
align-items: center;

/* Neutral/Graphene */

color: #485363;
}
}
</style>