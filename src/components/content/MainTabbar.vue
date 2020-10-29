<template>
    <TabBar>
      <TabBarItem path="/home"  activeColor="red">
        <img slot="item-icon" src="@/assets/img/1.png" alt="">
        <img src="@/assets/img/1-1.png" alt="" slot="item-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/fenlei"  activeColor="red">
        <img slot="item-icon" src="@/assets/img/2.png" alt="">
        <img src="@/assets/img/2-1.png" alt="" slot="item-active">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shop" activeColor="red">
        <img slot="item-icon" src="@/assets/img/3.png" alt="">
        <img src="@/assets/img/3-1.png" alt="" slot="item-active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/user" activeColor="red">
        <img slot="item-icon" src="@/assets/img/4.png" alt="">
        <img src="@/assets/img/4-1.png" alt="" slot="item-active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import TabBarItem from '@/components/tabbar/TabBarItem'

  export default{
    name:'MainTabbar',
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style>
</style>
