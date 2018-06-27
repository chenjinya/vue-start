<template lang="pug">
  
  <div id="app">
  
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() { },
  created: function () {
  }
};
</script>

<style lang="postcss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  position: relative;
  z-index: 1;
}
</style>
