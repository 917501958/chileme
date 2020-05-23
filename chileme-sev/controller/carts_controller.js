const Carts = require('../model/carts_schema')

//查询购物车数据
const queryCartsData = async ctx => {
    //get 请求
    let sec = ctx.request.query
    console.log(sec)
    // ctx.body = '查询购物车数据成功'
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
    let sec = ctx.request.body
    console.log(sec)
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