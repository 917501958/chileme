const First = require('../model/first_schema')

const queryCartsData = async ctx => {
    ctx.body = '查询'
}
const addGoods = async function(ctx){
    ctx.body = '新增'
}
const deleGoods = async ctx => {
    ctx.body = '删除'
}

module.exports = {
    queryCartsData,
    addGoods,
    deleGoods
}