<template>
  <div class="page" >
    <img class="logo" src="../assets/img/logo.png" />
    <p class="welcome-text" >{{msg}}</p>
  </div>
</template>


<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  mounted() { }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  margin: auto;
}
.logo {
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.welcome-text {
  color: #333;
  text-align: center;
  margin: 20px auto;
}
</style>
