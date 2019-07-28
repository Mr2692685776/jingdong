<template>
    <div>
        <div class="goods" v-for="(list,index) in cartarr" :key="index">
            {{list.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{list.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
            <cube-button  style="margin:10px 0;">下单</cube-button>
            <cube-button @click="clear">清空购物车</cube-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    methods:{
        removeCart(index){
            this.$store.commit('cartremove',index)
        },
        addCart(index){
            this.$store.commit('cartadd',index);
        },
        clear(){
            this.$store.commit('clearcart');
        }
    },
    computed:{
        ...mapState({
            cartarr: state=>state.cartarr
        })
    },
    created(){

    }
}
</script>


<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left
        .goodsright
            float  right
        i
            font-size 18px
</style>