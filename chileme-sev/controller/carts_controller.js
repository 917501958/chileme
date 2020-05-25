const Carts = require('../model/carts_schema')
const Goods = require('../model/goods_schema')

//查询购物车数据
const queryCartsData = async ctx => {
    //get 请求
    let sec = ctx.request.query
    console.log(sec)
    // ctx.body = '查询购物车数据成功'  //返回数据 结果
    await Carts.find().then(data => {
        console.log(data)
        ctx.body = {
            code:200,
            success:true,
            msg:'查询成功',
            list:data
        }
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code:200,
            success:false,
            msg:'查询失败'
        }
    })
}
//向购物车中增加商品
const addGoods = async function(ctx){
    let sec = ctx.request.body //获取参数
    console.log(sec)
    await Goods.findOne({goodsId:ctx.goodsId}) //去商品数据集合中查询商品数据
    .then(res => { //查询成功后对查询结果res进行操作
        console.log(res)//未查询到结果返回null
    }).catch(err => { //查询失败后对查询失败的结果 res进行操作
        console.log(err)
    })
    ctx.body = '新增商品成功'
}
//从购物车中删除商品
const deleGoods = async ctx => {
    ctx.body = '删除商品成功'
}

module.exports = {
    queryCartsData,
    addGoods,
    deleGoods
}