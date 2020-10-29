<template>
  <div class="tab-bar-item" @click="btnActive">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active"></slot>
    </div>
  <!--  <div :class="{active:isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data() {
      return {
        /* isActive: true, */
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      btnActive(){
        this.$router.push(this.path).catch(()=>{})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }
  img {
    width: 28px;
    height: 28px;
  }
</style>
