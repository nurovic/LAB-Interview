<template>
<div class="top-bar-container">

    <img class="brand-logo" src="../assets/watsons.png" alt="">
    <div class="search-area">
        <input class="top-bar-input " type="text" placeholder="Write the product or category you are looking for">
    </div>
    <div class="profile">
        <span class="text">
            <span class="hello">Hello,</span>
            <span class="user-name"> Clara Clara</span>
        </span>
        <img class="profile-picture" src="../assets/profile-picture.png" alt="">
        <img class="logo-up"  src="../assets/up.png" alt="">
    </div>
    <hr class="divider-logo" />
    <div class="order">
        <font-awesome-icon class="fontawesome-icon" icon="magnifying-glass" />
        <div class="logo-container">
            <img class="logo-order" src="../assets/order-black.png" alt="">
            <div class="order-count">2</div>
        </div>
            <font-awesome-icon class="fontawesome-icon bars" icon="bars" />
    </div>
</div>
</template>


<style scoped>
.top-bar-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 140px;
    height: 112px;
}
.fontawesome-icon{
    display: none;
}
.divider-logo{
height: 24px;
opacity: .2;
margin-right: 24px;
background: #ECECEC;
}
.brand-logo{
    height: 27.81px;
    width: 146.12px;
    margin-right: 158.38px;
}
.top-bar-input{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px;
    gap: 8px;
    border:none;
    width: 560px;
    height: 42px;
    background: rgba(236, 236, 236, 0.3);
    border-radius: 32px;
    margin-right:24px;
}
.profile{
    display: flex;
    align-items: center;
}
.profile-picture{
    height: 36px;
    border-radius: 50%;
    border: 2px solid #FFF;
}
.logo-container{
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
.hello{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8493A8;     
}
.user-name{
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #2A2A48;
}
.logo-order{
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #485363;
    width: 22px;
    height: 18px;
}
.text{
    width:120px;
    margin-right:16px;
}
.logo-up{
    height: 22px;
    margin-left:22px;
    margin-right:29px
}
.order-count{
    position: relative;
    text-align: center;
    top: -13px;
    right: 12px;
    width: 18px;
    height: 20px;
    border-radius: 50%;
    background: #FA4C44;
    color: #FFF;
}

</style>

<style scoped>
@media screen and (max-width: 375px) {
.top-bar-container{
    display: flex;
    /* justify-content: ; */
    margin: 0;
    height: 56px;
    width: 375px;
}
.brand-logo{
    height: 23.98px;
    width: 120px;
    margin: 0;
}
.search-area, .profile, .divider-logo {
display: none;
}
.fontawesome-icon{
    display:inherit;
}
.order{
    display: flex;
}
.logo-container{
    margin:0 28px
}
.bars{
    margin-right: 23px;
}
}
</style>