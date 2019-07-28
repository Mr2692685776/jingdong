module.exports = {
    configureWebpack:{
        devServer:{
            port:80,
            before(app){
                let userPool =[{
                    username:'111',
                    password:'111'
                },{
                    username:'222',
                    password:'222'
                }]

                app.get('/api/getRollingItem',(req,res)=>{
                    res.json([
                        [
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                label:'分类一'
                            },
                        ],
                        [
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                label:'分类一'
                            },
                        ],
                    ])
                })

                //获取头部轮播图api
                app.get('/api/getHeadItem',(req,res)=>{
                    res.json([
                        {
                            url: 'http://www.didichuxing.com/',
                            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                        },{
                            url: 'http://www.didichuxing.com/',
                            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                        },  {
                            url: 'http://www.didichuxing.com/',
                            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                        }]
                    )
                })

                app.get('/api/register',(req,res)=>{
                    const {username,password} = req.query;
                    const len = userPool.filter(v=>v.username==username).length
                    if (len>0){
                        res.json({
                            success:false,
                            message:'用户名已存在',
                        })
                    }else {
                        res.json({
                            success:'success',
                            message:'注册成功',
                        })
                    }
                })

                //登录模块
                let tokenKey = 'CrazyLove';
                app.get('/api/login',(req,res)=>{
                    let loginInfo ={username:'',password:''};
                    console.log("query",req.query);
                    loginInfo = req.query;
                    // let user = userPool.find(v=>v.username==loginInfo.username);
                    let user = userPool.find(v=>v.username==loginInfo.username&&v.password==loginInfo.username);
                    console.log("user",user);
                    if (undefined != user) {
                        res.json({
                            token: tokenKey+"-"+user.username +"-"+ (new Date().getTime()+60*60*1000),
                            message:'登录成功',
                            code:1
                        })
                    }else {
                        res.json({
                          message:'登录失败',
                          code:0
                        })
                    }
                })

                app.get('/api/classify',(req,res)=>{
                    switch (req.query.index) {
                        case '0':
                            res.json([
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },]
                            );
                            break;
                        case '1':
                            res.json(
                                    [{
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    }]
                              );
                            break;
                        case '2':
                            res.json(
                                    [{
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    }]
                             );
                            break;
                        case '3':
                            res.json(
                                    [{
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    }]
                           );
                            break;
                        case '4':
                            res.json(
                                    [{
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    }]
                             );
                            break;
                        case '5':
                            res.json(
                                    [{
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    }]
                                );
                            break;
                        case '6':
                            res.json(
                                    [{
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    }]);
                            break;
                    }
                })
            }
        },
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
