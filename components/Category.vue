<script>
export default {

}
</script>

<template>
    <div class="cateogry-container">
        <ul>
            <li>CAMPAIGNS</li>
            <li>PERSONAL CARE</li>
            <li>SKN CARE</li>
            <li>MAKE-UP</li>
            <li>MOTHER & BABY</li>
            <li>MEN CARE</li>
            <li>HEALTHY LIFE</li>
            <li>BRANDS</li>
        </ul>
    </div>
</template>

<style>

ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0 140px;
}
li:hover{
    background: rgba(236, 236, 236, 0.3);
    border-radius: 4px 4px 0px 0px;
}
li{
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 16px;
    color: #2A2A48;
}
@media  (max-width: 375px) {
.cateogry-container{
    visibility: hidden;
}
}
</style>