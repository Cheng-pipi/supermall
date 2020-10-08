<template>
  <tabbarr>
    <tabbar-item path="/home">
      <img slot="item-icon" src="~assets/image/tabbar/home_0.jpg"/>
      <img slot="item-icon-active" src="~assets/image/tabbar/home_1.jpg"/>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/catagory" activeColor = "red">
      <img slot="item-icon" src="~assets/image/tabbar/type_0.jpg"/>
      <img slot="item-icon-active" src="~assets/image/tabbar/type_1.jpg"/>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor = "red">
      <img slot="item-icon" src="~assets/image/tabbar/shopcar_0.jpg"/>
      <img slot="item-icon-active" src="~assets/image/tabbar/shopcar_1.jpg"/>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor = "red">
      <img slot="item-icon" src="~assets/image/tabbar/mine_0.jpg"/>
      <img slot="item-icon-active" src="~assets/image/tabbar/mine_1.jpg"/>
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbarr>
</template>


<script type="text/ecmascript-6">
  /**/
  import Tabbarr from 'components/common/tabbar/TabBar'
  import TabbarItem from "components/common/tabbar/TabBarItem"

  export default{
    name:'MainTabBar',
    components:{
      Tabbarr,
      TabbarItem,
    },
    props:[]
  }
</script>

<style scoped>

</style>
