<template>

    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul >
                <li v-for="(item,index) in tabslabel"
                    @click='selectlist(index)'
                    :class="item.active?'active':''"
                    :key="index"
                >{{item.label}}</li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index"><div>
                    <img :src="tag.image" alt=""/>
                    <p>{{tag.label}}<i class="cubeic-add" @click="addtocart($event,tag)"></i></p>
                </div></li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>

    export default {
        name: "List",
        data (){
          return{
              tags:[],
              tabslabel:[
                  {
                      label:'热门推荐',
                      active:true
                  },
                  {
                      label:'手机数码',
                      active:false
                  },
                  {
                      label:'家用电器',
                      active:false
                  },
                  {
                      label:'家用空调',
                      active:false
                  },
                  {
                      label:'电脑产品',
                      active:false
                  },
                  {
                      label:'计生情趣',
                      active:false
                  },
                  {
                      label:'美妆护肤',
                      active:false
                  },
                  {
                      label:'口红',
                      active:false
                  },
                  {
                      label:'手袋',
                      active:false
                  },
                  {
                      label:'金银财宝',
                      active:false
                  },
                  {
                      label:'手机数码',
                      active:false
                  },
                  {
                      label:'手机数码',
                      active:false
                  },
              ]
          }
        },
        methods: {
            //vuex添加
            addtocart(e,tag){
                this.$store.commit('tocart',tag);
            },
            selectlist(index){
                this.tabslabel.forEach((v,ind)=>{
                    if (index==ind){
                        v.active = true;
                    }else {
                        v.active = false;
                    }
                })
                this.loadclassify(index);
            },

            async loadclassify(index){
                const result =await this.$axios.get('/api/classify',{
                    params:{
                        index:index
                    }
                })
                this.tags = result.data
                console.log(result);
            }
        },
        created(){
            this.loadclassify(0);
        },
        mounted(){
            //设置滚动盒子的高度
            const leftpanels=document.querySelector('.leftpanels')
            const rightpanels=document.querySelector('.rightpanels')
            const bodyheight=document.documentElement.clientHeight
            leftpanels.style.height=bodyheight-57+'px'
            rightpanels.style.height=bodyheight-57+'px'
        }
    }
</script>
<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img
                        width 80px
                        height  80px
</style>