<template>
    <div>
        <cube-slide :data="headItem"/>
        <cube-slide ref="slide" :data="rollingItems" >
            <cube-slide-item v-for="(lists, index) in rollingItems" :key="index" :auto-play="false">
                <ul class="listul">
                    <li  class="listli" v-for="(list, index2) in lists" :key="index2">
                        <a :href="list.url">
                            <img :src="list.image">
                            <p>{{list.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>

</template>
<script>
    export default {
        name: "index",
        data(){
            return{
                headItem:[],
                rollingItems:[],
            }
        },
        methods: {
        },
        created(){
            this.$axios.get("/api/getHeadItem").then(data=>{
                console.log("data",data.data);
                this.headItem = data.data;
            });
            this.$axios.get("/api/getRollingItem").then(data=>{
                this.rollingItems = data.data;
            })
        }
    }
</script>

<style lang="stylus" scoped>
        .listul
            display flex
            flex-wrap wrap
            .listli
                width 20%
                justify-content center
                img
                    width 35px
                    height  35px
                    border-radius  50%
                    padding 5px 0
                p
                    font-size  14px
                    padding-bottom  10px
</style>