<!-- 推荐信息 -->

<template>
	<div class='recommend'>
		<div v-for="item in recommends" class="recommend-item">
			 <a :href="item.link">
				 <img :src="item.image" alt="">
				 <div>{{item.title}}</div>
			 </a>
		</div>		
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		width:100%;
		text-align: center;
		font-size: 12px;
		height:130px;
		border-bottom: 5px solid #f0f0f0;
		margin-top: 3px;
	}
	.recommend-item{
		flex:1;
	}
	.recommend-item img{
		width:65px;
		height:95px;
		margin-bottom: 0px;
		padding:15px 0px 15px 0px;

	}
</style>
