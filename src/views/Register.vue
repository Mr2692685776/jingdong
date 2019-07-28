<template>
    <div>
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png" alt="">
        <cube-form
                :model="register"
                :schema="regSchema"
                @submit="submitHandler"
        ></cube-form>

    </div>
    
</template>

<script>
    export default {
        name: "Register",

        data(){
            return{
                register:{
                    username:'',
                    password:'',
                },
                regSchema:{
                    fields:[{
                        type:'input',
                        modelKey: 'username',
                        label: '账号',
                        props: {
                            placeholder: '请输入'
                        },
                        rules: {
                            required: true
                        },
                        trigger: 'blur',
                        messages:{
                            required:'请输入账号'
                        }
                    },{
                        type: 'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入',
                            type:'password',
                            eye: {
                                open: false,
                            }
                        },
                        rules: {
                            required: true
                        },
                        trigger: 'blur',
                        messages:{
                            required:'请输入密码'
                        }
                    }, {
                        type: 'submit',
                        label: '注册'
                    },

                    ]
                }
            }
        },
        methods:{
            submitHandler(e){
                e.preventDefault();
                this.$axios.get("/api/register",{
                    params:this.register
                }).then(data=>{
                    console.log("data",data);
                    console.log("message",data.data)
                })
            },
        }
    }
</script>

<style scoped>
    .headerimg{
        height:150px;
        width:100%;
    }

</style>