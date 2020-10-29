<template>
	<div class="goods-item">
		<img :src="goodsItem.show.img">
	</div>
</template>

<script>
	export default{
		name:'GoodsListItem',
		prop:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
</style>
