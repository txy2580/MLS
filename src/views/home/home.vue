<template>
	<div id="home">
		<!-- 顶部 -->
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<!-- 轮播 -->
		<HomeSwiper></HomeSwiper>
		<!-- 推荐信息 -->
		<RecommendView :recommends="recommends"></RecommendView>
		<!-- feature-->
		<FeatureView></FeatureView>
		<!-- TabControls -->
		<TabControls class="TabControls" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
		<!-- 分页列表 -->
		<GoodsList :goods="showGoods"/>
	</div>
</template>

<script>
	import NavBar from '@/components/commom/navbar/NavBar.vue'
	import {getHomeMultidata,getHomeGoods} from '../../../network/home.js'
	import swiper from '../../components/commom/swiper/swiper.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import TabControls from '../../components/content/TabControl/TabControl.vue'
	import GoodsListItem from '../../components/content/goods/GoodsListItem.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'

	export default {
		name: "home",
		components: {
			NavBar,
			swiper,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControls,
			GoodsList,
			GoodsListItem
		},
		data() {
			return {
				banners: [],
				recommends: [],
				//TabControls保存
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentType:"pop"
			}
		},
		created() {
			//1.请求多个数据
			this.getHomeMultidata()
			//2.请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		computed:{
           showGoods(){
			   return this.goods[this.currentType].list
		   }
		},
		methods: {
			// 事件监听相关
			tabClick(index){
              switch(index){
                case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break		 
			  }
			}, 
			// 网络请求相关
			getHomeMultidata() {
				//1.请求多个数据
				getHomeMultidata().then(res => {
					this.recommends = res.data.recommend.list;
					this.banners = res.data.banner.list;
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
				})
			}
		}
	}
</script>
<style>
	.swiper1 {
		height: 200px;
	}

	.TabControls {
		position: sticky;
		top: 44px;
		z-index: 20;
	}

	.home-nav {
		background-color: #ff699c;
		text-align: center;
		color: white;
	}
</style>
