<template>
    <div class="theme-link m1 pt1 pb1 pl1 rounded h5">
       {{title}}
    </div>
</template>

<script>

    export default {
        props: ['title'],
        name: 'ThemeLink',
        components: {
        }
    }
</script>

<style>
.theme-link{
    /*box-shadow: 0px 5px 30px #efefef;*/
    border-bottom: 1px solid #efefef;
}
</style>