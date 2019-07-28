<template>
    <div>
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png" alt="">
        <cube-form
                :model="login"
                :schema="loginSchema"
                @submit="submitHandler"
        ></cube-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                login:{
                    username:'',
                    password:'',
                },
                loginSchema:{
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
                        label: '登录'
                    }
                    ]
                }
            }
        },
        methods:{
            //登录
            async submitHandler(e){
                e.preventDefault()
                this.$axios.get('/api/login',{params:this.login}).then(res=>{
                    console.log(res.data);
                    alert(res.data.message);
                    if (res.data.code==1) {
                        this.$store.commit('setToken', res.data.token);
                        console.log("token", this.$store.state.token);
                        window.localStorage.setItem("token", res.data.token);

                        console.log("this.$route.query.redirect",this.$route.query.redirect);
                        if (this.$route.query.redirect) {
                            this.$router.replace({path:this.$route.query.redirect})
                        }else {
                            console.log(2);
                            this.$router.replace({path:'/bootNav/index'})
                        }
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .headerimg{
        height:150px;
        width:100%;
    }
</style>