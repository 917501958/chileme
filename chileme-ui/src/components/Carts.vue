<template lang="pug">
    div.carts
        el-table(:data='cartsList',border)
            el-table-column(prop="goodname",label="商品")
            el-table-column(prop="num",label="数量")
            el-table-column(prop="price",label="金额")
            el-table-column(prop="methods",label="操作")
                //- 1.删除 2.修改数量+ -
                template(slot-scope="scope")
                    el-button(type="text",size="small",@click="deleteHandle(scope.row)") 删除
        el-divider
        //- p {{`数量 ${cartsTable.length} 金额 ${total}`}}  
        el-button(type='danger',@click="deleteAllGoods") 清空
        el-button(type='success',@click="addOrder") 结算 
</template>
<script>
export default { 
    data(){
        return{
            // cartsTable:[],
        }
    },
    props: ['cartsList'],
    methods:{
        // 2.子组件中定义一个函数，并绑定给一个按钮来进行触发，在该函数中接收子组件的参数
        // 4.通过emit来调用绑定在子组件上的父组件方法，并将子组件获得的实参传递给父组件
        deleteHandle(row){
            console.log(row)
            console.log('-----子组件-----')
            this.$emit('dianji',row)
        },
        deleteAllGoods(){
            this.Axios({
                method:'GET',
                url:'/api/carts/deleteAll'
            }).then(res => {
                console.log(res)
                this.$emit('shanchu')
            }).catch(err => {
                console.log(err)
            })
        },
        //创建订单
        addOrder(){
            this.Axios({
                method:'POST',//请求方式
                url:'/api/order/addOrder', //请求地址
                data:{}, //请求携带的参数，若该请求不需要携带参数，则可以忽略该属性
            }).then(res => { //请求成功的回调函数 res请求返回的结果
                console.log(res)
            }).catch(err => { //请求失败的回调函数 err 请求失败的返回结果
                console.log(err)
            })
        },
    
    }
    // mounted(){
    //     this.cartsTable = this.cartsList
    // },
    // computed:{
    //     total(){
    //         let n =0;
    //         for(const item of this.cartsTable){
    //             n+= item.num*item.price
    //         }
    //         return
    //     }
    // }
}
</script>
<style lang="scss" scoped>
.el-table{
    width:90%;
    margin:auto;
}
</style>