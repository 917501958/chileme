<template>
    <div>
       <h1>这是一个新的vue组件</h1>
       <div @click="fn1">{{ val1 }}</div>
       <div @click="fn2(val1,val2,val3)">{{ val2 }}</div>
       <div @click="fn3">{{ val3 }}</div>
       <div>{{ val4 }}</div>
       <div>{{ val5 }}</div>
       <div @click="sendRequest">{{ val7.name }}</div>
       <div>{{ val7.age }}</div>
       <div>{{ val7.job }}</div>
       <div>{{ val6[0] }}</div>
       <div>{{ val6[1] }}</div>
       <div>{{ val6[2] }}</div>
       <div v-for="i in val6" :key='i'>{{ i }}</div>

       <div @click="sendGetRequest">GET</div>
       <div @click="sendPostRequest">POST</div>
    </div> 
</template>
<script>
export default {
    //绑定数据
    data(){
        return{
            val1:'字符串',
            val2:1,
            val3:true,
            val4:undefined,
            val5:null,
            val6:['a','b','c'],
            val7:{
                name:'张三',
                age:18,
                job:'driver'
            },
        }
    },
    //绑定方法
    methods:{
        fn1(){
            // alert('fn1')
            // alert(this.val7.name)
            this.fn3()
        },
        fn2(sec,sec1,sec2){
            alert(`sec: ${sec}
                sec1: ${sec1}
                sec2: ${sec2}
                `)
            // this.fn3()
            
        },
        fn3(){
            alert('fn3')
        },
        sendRequest(){
            this.Axios({
                method:'GET',
                url:'/api/carts/queryCartsData',
                data:{},
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        sendGetRequest(){
            this.Axios({ //访问vue组件上绑定的数据和方法用this
                method:'GET', //请求方式 GET POST(新增) PUT DELETE
                url:'/api/carts/queryCartsData', //请求的接口地址
                params:{
                    name:'a',
                    age:10
                }, //请求携带的参数
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        },
        sendPostRequest(){
            this.Axios({
                method:'POST', //请求方式
                url:'/api/carts/addGoods',
                data:{ //携带参数
                    name:'a',
                    age:10
                },
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>