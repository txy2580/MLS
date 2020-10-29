<template>
	<div class="tab-control">
<!-- 		 <el-tabs v-model="activeName" @tab-click="handleClick" class="el">
		    <el-tab-pane class="ell" label="流行" name="first">流行</el-tab-pane>
		    <el-tab-pane class="ell" label="新款" name="second">新款</el-tab-pane>
		    <el-tab-pane class="ell" label="精选" name="third">精选</el-tab-pane>
		    <el-tab-pane class="ell" label="定时" name="fourth">定时</el-tab-pane>
				<el-tab-pane class="ell" label="任务" name="five">任务</el-tab-pane>
		  </el-tabs>
			<div style="height:200px">aaa</div> -->
			
			<div v-for="(item,index) in titles" 
			class="tab-control-item" 
			:class="{active: index === currentIndex}"
			 @click="itemClick(index)">
				<span>{{item}}</span>
			</div>
	</div>
</template>

<script>
		
	export default {
		 name:'TabControl',
	    data() {
	      return {
	       activeName: 'first',
				 currentIndex:0,
				
	      }
	    },
			props:{
				titles:{
					type:Array,
					default(){
						return []
					}
				}
			},
	   methods: {
	      itemClick(index) {
	        this.currentIndex = index;
	      }
	    }
	  };
</script>
 
<style scoped>
	.tab-control{
		margin-top:0px;
		height:45px;
		display:flex;
		text-align: center;
		font-size: 15px;
		background-color: #fff;
	}
	.tab-control-item{
		flex:1;
		height:40px;
		line-height: 40px;
	}
  .active{
		color:red;
	}
	.active span{
		border-bottom: red 3px solid;
	}
/* 	.el{
		margin-left: 5%;
	}
.el-tabs__nav-wrap::after{
	    content: "";
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 90%;
	    height: 1px;
	    background-color: #E4E7ED;
	    z-index: 1;
} */
	
</style>
