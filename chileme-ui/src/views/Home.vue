<template lang='pug'>
  div.home
    el-row
          el-col(:span='1')
              div.gridlt
                div.menuBtn(@click="jumpTo('/goods')")
                   span.iconfont &#xe681;
                   i 收银
                div.menuBtn
                   span.iconfont &#xe648;
                   i 会员  
                div.menuBtn(@click="jumpTo('/stockManagement')")
                   span.iconfont &#xe603;
                   i 库存
                div.menuBtn
                   span.iconfont &#xe618;
                   i 换班
                div.menuBtn
                   span.iconfont &#xe618;
                   i 报表
                div.menuBtn(@click="jumpTo('/first')")
                   span.iconfont &#xe647;
                   i 辅助
                div.menuBtn
                   span.iconfont &#xe60d;
                   i 退出                
          el-col(:span='23')
              div.gridrt
                 router-view
</template>

<script>
export default {
  data(){
    return{
      ltBtn:[
        {id:1,icon:'&#xe681;',name:'收银',link:''},
        {id:2,icon:'&#xe648;',name:'会员',link:''},
        {id:3,icon:'&#xe603;',name:'库存',link:''},
        {id:4,icon:'&#xe618;',name:'换班',link:''},
        {id:5,icon:'&#xe618;',name:'报表',link:''},
        {id:6,icon:'&#xe647;',name:'辅助',link:''},
        {id:7,icon:'&#xe60d;',name:'退出',link:''},
      ]
    }
  },
  methods:{
    jumpTo(path){
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin flx($dec:column){
  display: flex;
  flex-direction:$dec;
}
.home{
  height: 100%;
}
.el-row{
  height: 100%;
}
.el-col{
  height: 100%;
}
.gridlt,.gridrt{
  height: 100%;
  overflow-y: auto;
}
.gridlt{
  @include flx;
  .menuBtn{
    @include flx;
    flex:1;
    line-height: 40px;
    &:hover{
      background:rgb(246,36,36);
    }
  }
  background: rgb(255, 253, 253);
}
</style>