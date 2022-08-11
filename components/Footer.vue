<script>
</script>

<template>
    <div class="footer-container">
        <div class="text-container">
            <p class="news-text">Sign up to our newsletter</p>
            <p class="offers-text">Be the first to hear about the latest offers.</p>
        </div>
        <div class="input-container">
            <input type="email" placeholder="Your email address" class="input">
            <button class="button"> SUBSCRIBE </button>
        </div>
    </div>
</template>

 
<style> 
.footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 1445px;
    height: 144px;
    padding: 0 142.5px;


    background: #F2F0FF;
}

.news-text {
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    line-height: 32px;
    color: #2A2A48;
    margin-bottom: 16px
}

.offers-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(42, 42, 72, 0.6)
}

.input-container {
    display: flex;
}

.input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px 16px;
    margin-right: 16px;

    width: 412px;
    height: 48px;

    background: #FFFFFF;


    border: 1px solid #ECECEC;
    border-radius: 4px;
}

::placeholder {
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
    color: rgba(42, 42, 72, 0.6);
}

.button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 28.5px;
    gap: 8px;

    width: 132px;
    height: 48px;
    background-color: #FF27AD;
    border-radius: 4px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    font-style: bold;
    line-height: 16px;
    color: #FFFFFF;
}
</style>

<style>
@media screen and (max-width: 375px){
.footer-container {
    display: flex;
    flex-direction: column;

    width: 375px;
    height: 144px;
    padding: 16px;
    background: #F2F0FF;
}
.input-container{
    margin: 0 16px;
    width: 343px;
    
}
.input{
    width: 220px;
}
.button{
    width: 107px;
}
.news-text {
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;

color: #2A2A48;

}
.text-container{
    margin:0 0 16px -35px ;

}
.offers-text {
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(42, 42, 72, 0.6)
}
}
</style>