<template>
  <div id="tab-bar">
   <slot>
   </slot>
  </div>
</template>
<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f3f3;
    position: fixed;
    bottom: 1px;
    right: 0;
    left: 0;
    box-shadow: 0 -0.3px 0px rgba(100, 100, 100, .4);
  }

</style>
