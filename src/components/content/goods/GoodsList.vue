<template>
<!-- 	<div class="goods-list" style="height:800px">
		<GoodsListItem v-for="item in goods" :good-item="item"></GoodsListItem>
				{{goods}}
	</div> -->
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default{
		name:'GoodsList',
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
