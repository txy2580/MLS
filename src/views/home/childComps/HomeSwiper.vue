<!-- 轮播 -->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, item1) in banners" :key="item1">
      <a href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { getHomeMultidata } from "../../../../network/home.js";
import { Swipe, SwipeItem } from "vant";
export default {
  name: "HomeSwiper",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    console.log(getHomeMultidata);
    getHomeMultidata().then((res) => {
      /* console.log(res);
				this.result = res; */
      this.recommends = res.data.recommend.list;
      this.banners = res.data.banner.list;
    });
  },
};
</script>
<style>
.my-swipe {
  width: 100%;
  height: 200px;
}
.van-swipe-item img {
  width: 100%;
}

.home-nav {
  background-color: pink;
  color: white;
  text-align: center;
}
.el-carousel__item img {
  width: 100%;
  height: 200px;
}
.el-carousel {
  height: 200px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.tab-control-item {
  top: 38%;
}
</style>
