<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'TabBar',
    props:[],

  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2.5px 1px rgba(100, 100, 100, 0.1);
  }

</style>
