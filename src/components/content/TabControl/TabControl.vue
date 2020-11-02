<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div> 
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "TabControl",
  data() {
    return {
      activeName: 'a',
	  currentIndex: 0,
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
	  this.currentIndex = index;
	  this.$emit("tabClick",index)
    },
  },
};
</script>
 
<style scoped>
.tab-control {
  margin-top: 0px;
  height: 43px;
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 43px;
  line-height: 40px;
}
.active {
  color: red;
}
.active span {
  border-bottom: red 3px solid;
}

</style>
