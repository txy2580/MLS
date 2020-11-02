// 分页
<template>
  	<div class="goods-list" style="height:800px">
		<GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>
				{{goods}}
	</div> 
    
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods-list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding:2px;
}

</style>
