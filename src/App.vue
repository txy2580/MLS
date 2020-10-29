<template>
	<div id="app">
		<router-view></router-view>
    <Main-tabbar></Main-tabbar>
	</div>
</template>

<script>
	import MainTabbar from "@/components/content/MainTabbar.vue"
	export default {
		name: 'App',
		data() {
			return {
				userId: "lisi"
			}
		},
		components: {
		MainTabbar
		}
	}
</script>

<style>
	@import 'assets/css/index.css';
	@import 'assets/css/base.css';
	@import 'assets/css/app.css';
</style>
