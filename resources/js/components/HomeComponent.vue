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
        }

        li.item1 {
            top: 0;
            left: 0;
        }

        li.item2 {
            bottom: 0;
            left: 25%;
        }

        li.item3 {
            top: 0;
            left: 50%;
        }

        li.item4 {
            bottom: 0;
            left: 75%;
        }

        li.item5 {
            top: 0;
            left: 100%;
        }
    }
</style>

<template>
    <div class="container col-md-12">
        <ul>
            <li class="item1"><div class="bg"></div></li>
            <li class="item2"><div class="bg"></div></li>
            <li class="item3"><div class="bg"></div></li>
            <li class="item4"><div class="bg"></div></li>
            <li class="item5"><div class="bg"></div></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>
