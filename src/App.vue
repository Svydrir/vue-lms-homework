<template>
  <div id="app">
    <div class="menu">
      <navigation-menu/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu';

export default {
  name: 'App',
  components: {
    NavigationMenu,
  },
};
</script>

<style>
.menu{
  float: left;
  width: 15%;
  position: fixed;
}
.content{
  float: right;
  width: 85%;
}
</style>
