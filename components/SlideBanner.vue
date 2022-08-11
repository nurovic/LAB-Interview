<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: {
    Carousel,
    Slide,
    
    },
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        navigationEnabled: true,
        paginationColor:"#8493A8",
        paginationActiveColor:"#505357",
        
        }
    }
  },
}
</script>

<template>
  <div class="carousel-wrapper">
    <carousel v-bind="options" >
      <slide v-for="i in 3" :key="i" class="slide-container">
        <div class="left-panel">
          <div class="banner-brand">NATURALS BY WATSONS</div>
          <div class="banner-title">The new 2021 collection</div>
          <div class="banner-paragraph">Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep
            the hair looking smooth. Let your hair be flexible and fresh.</div>
            <button class="shop-now-button">SHOP NOW</button>
        </div>
        <div class="right-panel">
          <img class="banner-img" src="../assets/olive.png" />
        </div>
      </slide>
    </carousel>
  </div>
</template>



<style >
.slide-container {
  display: flex;
}
.VueCarousel-navigation-prev{
  position: relative;
  left: 55px !important;
  font-weight: 400;
  font-size: 32px;
}

.VueCarousel-navigation-next[data-v-453ad8cd] {
  position: absolute;
  right: 60px !important;
  font-weight: 400;
  font-size: 32px;
  border-radius: 50%;
}

.carousel-wrapper {
  max-width: 1440px;
  height: 400px;
  margin-bottom:40px;
  background: linear-gradient(87.81deg, #F2F0FF 35.04%, rgba(255, 255, 255, 0.67) 53.63%, rgba(252, 252, 255, 0.96) 64.78%, #F2F0FF 90.91%), #F2F0FF;
}

.left-panel {
  max-width: 580px;
  margin-left: 140px;
  padding: 88.5px 0;
}

.banner-img {
  width: auto;
  height: 400px;
  padding:26px 0;
  object-fit:fill;
}

.VueCarousel-dot {
  position: relative;
  top:-170px;
  left:-540px;
}
.banner-brand {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #8493A8;
}

.banner-title{
  font-family: 'Rubik';
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  margin-bottom:16px;
  display: flex;
  align-items: center;

  color: #2A2A48;
}

.banner-paragraph{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #485363;
  }
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
.shop-now-button{
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 8px;

  width: 105px;
  height: 32px;
  border:none;

  background: #FF27AD;
  border-radius: 4px;

  flex: none;
  order: 2;
  flex-grow: 0;
  color: #FFF
}
</style>


<style >
@media screen and (max-width: 375px){
.carousel-wrapper {
  width: 375px;
  height: 400px;
  margin-bottom:40px;
  background: linear-gradient(87.81deg, #F2F0FF 35.04%, rgba(255, 255, 255, 0.67) 53.63%, rgba(252, 252, 255, 0.96) 64.78%, #F2F0FF 90.91%), #F2F0FF;
}
.VueCarousel-navigation-prev{
display: none !important;
}

.VueCarousel-navigation-next[data-v-453ad8cd] {
display: none !important;
}

.carousel-wrapper{
  height: 543px;
}
.slide-container{
  display: flex;
  width: 375px;
  flex-direction: column-reverse;
}
.banner-img{
  padding: 0;
  height:262px
}
.right-panel{
  margin: 16px 33.25px 0 0 ;
}
.left-panel{
  margin: 0 16px;
  padding: 32px 0 0 0;
}
.banner-brand{
  font-weight: 700;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-transform: uppercase;

/* Neutral/Gray */

color: #8493A8;

}

.banner-title{
  font-weight: 700;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
letter-spacing: -0.2px;

/* Neutral/Coal */

color: #2A2A48;
}

.banner-paragraph{
  font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */
width: 343px;
height: 72px;
display: flex;
align-items: center;

/* Neutral/Graphene */

color: #485363;
}
.shop-now-button{
  width: 343px;
height: 32px;

background: #FF27AD;
border-radius: 4px;
}
}
</style>