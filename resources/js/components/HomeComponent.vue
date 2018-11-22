<style lang="scss" scoped>
    .container {
        height: 90vh;
    }
    ul {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        margin: 0;
        padding: 0;
        width: 600px;
        height: 150px;
        li {
            list-style: none;
            position: absolute;
            width: 200px;
            height: 200px;
            background: #000;
            margin: -100px;
            transform: rotate(45deg);
            transition: .5s;
            overflow: hidden;
            opacity: 1;
            :hover { opacity: .6; }
            img {
                width: 100%;
                height: 100%;
                transform: rotate(-45deg) scale(1.42);
            }
        }
        li.item1 { top: 0; left: 0; }
        li.item2 { bottom: 0; left: 25%; }
        li.item3 { top: 0; left: 50%; }
        li.item4 { bottom: 0; left: 75%; }
        li.item5 { top: 0; left: 100% }
    }
</style>

<template>
    <div class="container col-md-12">
        <ul>
            <li class="item1"><a href="#"><img src="../../../public/img/Chuju.jpg" alt=""></a></li>
            <li class="item2"><a href="#"><img src="../../../public/img/OurChicken.jpg" alt=""></a></li>
            <li class="item3"><a href="#"><img src="../../../public/img/master.png" alt=""></a></li>
            <li class="item4"><a href="#"><img src="../../../public/img/Goat.jpg" alt=""></a></li>
            <li class="item5"><a href="#"><img src="../../../public/img/BaekGu.jpg" alt=""></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>
