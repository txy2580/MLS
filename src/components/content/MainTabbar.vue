<template>
    <TabBar>
      <TabBarItem path="/home"  activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img src="@/assets/img/tabbar/home_active.svg" alt="" slot="item-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/fenlei"  activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img src="@/assets/img/tabbar/category_active.svg" alt="" slot="item-active">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shop" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" slot="item-active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/user" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot="item-active">
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
